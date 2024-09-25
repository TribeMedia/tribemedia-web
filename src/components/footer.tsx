import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Prometheus AI</h3>
            <p className="text-sm text-muted-foreground">Empowering businesses with cutting-edge AI technology</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:underline">Home</Link></li>
              <li><Link href="/about" className="text-sm hover:underline">About</Link></li>
              <li><Link href="/pricing" className="text-sm hover:underline">Pricing</Link></li>
              <li><Link href="/contact" className="text-sm hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-sm hover:underline">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-sm hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">Twitter</a></li>
              <li><a href="#" className="text-sm hover:underline">LinkedIn</a></li>
              <li><a href="#" className="text-sm hover:underline">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Prometheus AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer