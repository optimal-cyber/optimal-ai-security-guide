"use client";
import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { nistAisvsMapping, mappingMetadata } from "../../data/nistAisvsMapping";

export default function NistAisvsGraph() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [selectedNodeType, setSelectedNodeType] = useState<string>("all");
  const [selectedLinkType, setSelectedLinkType] = useState<string>("all");

  useEffect(() => {
    const width = 1000;
    const height = 700;
    
    // Filter nodes and links based on selection
    const filteredNodes = nistAisvsMapping.nodes.filter(node => 
      selectedNodeType === "all" || node.type === selectedNodeType
    );
    
    const filteredLinks = nistAisvsMapping.links.filter(link => {
      if (selectedLinkType !== "all" && link.type !== selectedLinkType) return false;
      const sourceExists = filteredNodes.some(n => n.id === link.source);
      const targetExists = filteredNodes.some(n => n.id === link.target);
      return sourceExists && targetExists;
    });

    // Cast nodes and links to D3 types
    const nodes = filteredNodes.map((d) => ({ ...d })) as d3.SimulationNodeDatum[];
    const links = filteredLinks.map((d) => ({ ...d })) as d3.SimulationLinkDatum<d3.SimulationNodeDatum>[];

    // Remove previous svg content
    d3.select(svgRef.current).selectAll("*").remove();

    // Create simulation with better physics
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3.forceLink(links).id((d: any) => d.id).distance(150).strength(0.8)
      )
      .force("charge", d3.forceManyBody().strength(-600))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide(80))
      .force("x", d3.forceX(width / 2).strength(0.1))
      .force("y", d3.forceY(height / 2).strength(0.1));

    const svg = d3
      .select(svgRef.current as SVGSVGElement)
      .attr("width", width)
      .attr("height", height)
      .style("background", "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)")
      .call(
        d3
          .zoom<SVGSVGElement, unknown>()
          .scaleExtent([0.3, 3])
          .on("zoom", (event) => {
            svgGroup.attr("transform", event.transform);
          })
      );

    const svgGroup = svg.append("g");

    // Draw links with different colors based on type
    const link = svgGroup
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", (d: any) => {
        const linkType = mappingMetadata.linkTypes[d.type as keyof typeof mappingMetadata.linkTypes];
        return linkType ? linkType.color : "#64748b";
      })
      .attr("stroke-width", (d: any) => {
        const linkType = mappingMetadata.linkTypes[d.type as keyof typeof mappingMetadata.linkTypes];
        return linkType ? linkType.width : 2;
      })
      .attr("opacity", 0.8)
      .style("filter", "drop-shadow(0 1px 2px rgba(0,0,0,0.3))");

    // Draw nodes with enhanced styling
    const node = svgGroup
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", (d: any) => {
        const nodeType = mappingMetadata.nodeTypes[d.type as keyof typeof mappingMetadata.nodeTypes];
        return nodeType ? nodeType.size : 20;
      })
      .attr("fill", (d: any) => {
        const nodeType = mappingMetadata.nodeTypes[d.type as keyof typeof mappingMetadata.nodeTypes];
        return nodeType ? nodeType.color : "#f472b6";
      })
      .attr("stroke", "#fff")
      .attr("stroke-width", 3)
      .style("cursor", "pointer")
      .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.3))")
      .on("mouseover", function (event, d: any) {
        d3.select(this)
          .attr("stroke", "#fbbf24")
          .attr("stroke-width", 5)
          .style("filter", "drop-shadow(0 4px 8px rgba(0,0,0,0.5))");
        
        if (tooltipRef.current) {
          tooltipRef.current.style.display = "block";
          tooltipRef.current.innerHTML = `
            <div class="font-bold text-lg mb-1">${d.label}</div>
            <div class="text-sm text-gray-300 mb-2">${d.type.replace(/-/g, " ").toUpperCase()}</div>
            ${d.description ? `<div class="text-xs text-gray-400">${d.description}</div>` : ""}
          `;
        }
      })
      .on("mousemove", function (event) {
        if (tooltipRef.current) {
          tooltipRef.current.style.left = event.pageX + 16 + "px";
          tooltipRef.current.style.top = event.pageY - 24 + "px";
        }
      })
      .on("mouseout", function () {
        d3.select(this)
          .attr("stroke", "#fff")
          .attr("stroke-width", 3)
          .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.3))");
        if (tooltipRef.current) {
          tooltipRef.current.style.display = "none";
        }
      })
      .on("click", function (event, d: any) {
        // Enhanced click behavior - highlight connected nodes
        const connectedNodes = new Set();
        const connectedLinks = links.filter((l: any) => 
          l.source.id === d.id || l.target.id === d.id
        );
        
        connectedLinks.forEach((l: any) => {
          connectedNodes.add(l.source.id);
          connectedNodes.add(l.target.id);
        });
        
        // Reset all nodes
        svgGroup.selectAll("circle").style("opacity", 0.3);
        svgGroup.selectAll("line").style("opacity", 0.2);
        
        // Highlight connected nodes and links
        svgGroup.selectAll("circle").filter((n: any) => connectedNodes.has(n.id))
          .style("opacity", 1);
        svgGroup.selectAll("line").filter((l: any) => 
          l.source.id === d.id || l.target.id === d.id
        ).style("opacity", 1);
        
        // Reset after 2 seconds
        setTimeout(() => {
          svgGroup.selectAll("circle").style("opacity", 1);
          svgGroup.selectAll("line").style("opacity", 0.8);
        }, 2000);
      })
      .call(
        d3
          .drag<SVGCircleElement, any>()
          .on("start", (event, d: any) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d: any) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d: any) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    // Draw labels with better positioning
    const label = svgGroup
      .selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .attr("pointer-events", "none")
      .attr("fill", "#fff")
      .attr("font-size", (d: any) => {
        const nodeType = mappingMetadata.nodeTypes[d.type as keyof typeof mappingMetadata.nodeTypes];
        return nodeType && nodeType.size > 15 ? 12 : 10;
      })
      .attr("font-weight", 600)
      .style("text-shadow", "0 1px 2px rgba(0,0,0,0.8)")
      .text((d: any) => {
        // Truncate long labels
        const text = d.label;
        return text.length > 20 ? text.substring(0, 17) + "..." : text;
      });

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);
      node.attr("cx", (d: any) => d.x).attr("cy", (d: any) => d.y);
      label.attr("x", (d: any) => d.x).attr("y", (d: any) => d.y);
    });

    // Clean up on unmount
    return () => {
      simulation.stop();
    };
  }, [selectedNodeType, selectedLinkType]);

  return (
    <div className="w-full">
      {/* Controls Panel */}
      <div className="mb-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-slate-300">Node Type:</label>
            <select
              value={selectedNodeType}
              onChange={(e) => setSelectedNodeType(e.target.value)}
              className="px-3 py-1 bg-slate-700 text-white rounded border border-slate-600 text-sm"
            >
              <option value="all">All Types</option>
              {Object.entries(mappingMetadata.nodeTypes).map(([type, config]) => (
                <option key={type} value={type}>{config.label}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-slate-300">Link Type:</label>
            <select
              value={selectedLinkType}
              onChange={(e) => setSelectedLinkType(e.target.value)}
              className="px-3 py-1 bg-slate-700 text-white rounded border border-slate-600 text-sm"
            >
              <option value="all">All Links</option>
              {Object.entries(mappingMetadata.linkTypes).map(([type, config]) => (
                <option key={type} value={type}>{config.label}</option>
              ))}
            </select>
          </div>
          
          <button
            onClick={() => {
              setSelectedNodeType("all");
              setSelectedLinkType("all");
            }}
            className="px-4 py-1 bg-teal-600 hover:bg-teal-500 text-white rounded text-sm font-medium transition-colors"
          >
            Reset View
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="mb-4 flex flex-wrap gap-4 justify-center">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-300">Legend:</span>
          {Object.entries(mappingMetadata.nodeTypes).map(([type, config]) => (
            <div key={type} className="flex items-center gap-1">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: config.color }}
              />
              <span className="text-xs text-slate-400">{config.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Graph Container */}
      <div className="relative w-full flex justify-center items-center" style={{ minHeight: 700 }}>
        <svg ref={svgRef} className="rounded-xl shadow-2xl border border-slate-700" />
        <div
          ref={tooltipRef}
          className="bg-slate-800 text-white p-3 rounded-lg shadow-lg border border-slate-600"
          style={{
            position: "fixed",
            display: "none",
            pointerEvents: "none",
            fontSize: 14,
            zIndex: 1000,
            maxWidth: 300,
          }}
        />
      </div>

      {/* Framework Info */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(mappingMetadata.frameworks).map(([key, framework]) => (
          <div key={key} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
            <h3 className="font-bold text-slate-200 mb-1">{framework.name}</h3>
            <p className="text-sm text-slate-400 mb-2">{framework.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">v{framework.version}</span>
              <a
                href={framework.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-teal-400 hover:text-teal-300 underline"
              >
                Documentation →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 