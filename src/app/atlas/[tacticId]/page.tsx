import Link from 'next/link';
import { getAtlasTacticById, atlasTactics } from '../../../data/atlasData';

interface PageProps {
  params: Promise<{
    tacticId: string;
  }>;
}

export async function generateStaticParams() {
  return atlasTactics.map((tactic) => ({
    tacticId: tactic.id,
  }));
}

export default async function AtlasTacticPage({ params }: PageProps) {
  const { tacticId } = await params;
  const tactic = getAtlasTacticById(tacticId);

  if (!tactic) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-400 mb-4">Tactic Not Found</h1>
          <Link href="/atlas" className="text-blue-400 hover:text-blue-300">
            Back to ATLAS Matrix
          </Link>
        </div>
      </main>
    );
  }

  const tacticIndex = atlasTactics.findIndex(t => t.id === tactic.id);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link href="/atlas" className="text-red-400 hover:text-red-300 mb-4 inline-block">
              ← Back to ATLAS Matrix
            </Link>
            <span className="inline-block px-4 py-2 bg-red-900/30 border border-red-700/50 rounded-full text-red-300 text-sm font-mono ml-4">
              Tactic {tacticIndex + 1} of {atlasTactics.length}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              {tactic.name}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mb-12 leading-relaxed">
            {tactic.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center mb-16">
            <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl px-8 py-4 text-white font-bold">
              {tactic.techniques.length} Techniques
            </div>
            <div className="text-slate-400">
              MITRE ATLAS Framework
            </div>
          </div>
        </div>
      </section>

      {/* Techniques Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Attack Techniques
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Explore the specific techniques adversaries use during the {tactic.name.toLowerCase()} phase of AI attacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tactic.techniques.map((technique, index) => (
            <div key={technique.id} className="bg-gradient-to-br from-red-900/50 to-red-800/30 backdrop-blur-sm rounded-3xl p-8 border border-red-700/50">
              <div className="flex items-start justify-between mb-4">
                <div className="text-2xl font-bold text-red-300">{index + 1}</div>
                <div className="text-red-400 text-sm font-mono">{technique.id}</div>
              </div>
              
              <h3 className="text-xl font-bold text-red-200 mb-3">{technique.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{technique.description}</p>
              
              {/* Examples */}
              <div className="mb-6">
                <h4 className="text-red-300 font-semibold mb-2">Examples:</h4>
                <ul className="text-slate-400 text-sm space-y-1">
                  {technique.examples.map((example, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Mitigations */}
              <div className="mb-6">
                <h4 className="text-green-300 font-semibold mb-2">Mitigations:</h4>
                <ul className="text-slate-400 text-sm space-y-1">
                  {technique.mitigations.map((mitigation, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      {mitigation}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* References */}
              <div className="pt-4 border-t border-red-700/30">
                <h4 className="text-blue-300 font-semibold mb-2">References:</h4>
                <div className="space-y-1">
                  {technique.references.map((ref, i) => (
                    <a 
                      key={i} 
                      href={ref} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm block"
                    >
                      MITRE ATLAS {technique.id}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          {tacticIndex > 0 && (
            <Link 
              href={`/atlas/${atlasTactics[tacticIndex - 1].id}`}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300"
            >
              ← {atlasTactics[tacticIndex - 1].name}
            </Link>
          )}
          
          <Link 
            href="/atlas"
            className="px-6 py-3 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl font-semibold hover:from-slate-700 hover:to-slate-800 transition-all duration-300"
          >
            ATLAS Matrix
          </Link>
          
          {tacticIndex < atlasTactics.length - 1 && (
            <Link 
              href={`/atlas/${atlasTactics[tacticIndex + 1].id}`}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-xl font-semibold hover:from-orange-600 hover:to-yellow-700 transition-all duration-300"
            >
              {atlasTactics[tacticIndex + 1].name} →
            </Link>
          )}
        </div>
      </section>
    </main>
  );
} 