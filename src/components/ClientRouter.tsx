'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ClientRouter() {
  const router = useRouter();

  useEffect(() => {
    // Check if we have a path parameter (from 404.html redirect)
    const urlParams = new URLSearchParams(window.location.search);
    const pathParam = urlParams.get('path');
    
    if (pathParam) {
      // Remove the path parameter from the URL
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete('path');
      
      // Navigate to the correct path
      router.push(pathParam);
      
      // Update the URL without the path parameter
      window.history.replaceState({}, '', newUrl.toString());
    }
  }, [router]);

  return null;
} 