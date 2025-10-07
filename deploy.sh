#!/bin/bash

# AutoŠkola Dolet - Deployment Script
echo "🚗 AutoŠkola Dolet - Priprema za deployment..."

# Clean previous builds
echo "🧹 Čišćenje prethodnih build-ova..."
rm -rf .next
rm -rf out

# Install dependencies
echo "📦 Instaliranje dependencija..."
npm install

# Build the project
echo "🔨 Build-ovanje aplikacije..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build uspješan!"
    echo "📁 Statički fajlovi su kreirani u 'out' direktoriju"
    echo "🌐 Aplikacija je spremna za deployment!"
    echo ""
    echo "Za deployment na Vercel:"
    echo "1. Push-ajte kod na GitHub"
    echo "2. Povežite repo sa Vercel"
    echo "3. Vercel će automatski deploy-ovati aplikaciju"
    echo ""
    echo "Za statički hosting:"
    echo "1. Upload-ajte sadržaj 'out' direktorija na vaš hosting"
    echo "2. Postavite index.html kao početnu stranicu"
else
    echo "❌ Build neuspješan! Provjerite greške iznad."
    exit 1
fi
