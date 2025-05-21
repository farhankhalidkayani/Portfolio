#!/bin/bash

# Favicon Conversion Script for Farhan's Portfolio
# This script helps convert SVG files to appropriate favicon formats

echo "=============================================="
echo "  Favicon Conversion Helper"
echo "=============================================="
echo
echo "This script will help you convert the SVG files to proper favicon formats."
echo
echo "Before running this script, make sure you have the following tools installed:"
echo "- ImageMagick (convert command)"
echo "- librsvg (rsvg-convert command)"
echo
echo "You can install these tools using:"
echo "  brew install imagemagick librsvg  # on macOS"
echo "  sudo apt install imagemagick librsvg-bin  # on Ubuntu/Debian"
echo
echo "Files to convert:"
echo "  1. favicon.svg → favicon.ico"
echo "  2. favicon-16x16.png.svg → favicon-16x16.png"
echo "  3. favicon-32x32.png.svg → favicon-32x32.png"
echo "  4. apple-touch-icon.png.svg → apple-touch-icon.png"
echo "  5. android-chrome-192x192.png.svg → android-chrome-192x192.png"
echo "  6. android-chrome-512x512.png.svg → android-chrome-512x512.png"
echo
echo "Conversion commands:"
echo

for file in favicon-16x16.png.svg favicon-32x32.png.svg apple-touch-icon.png.svg \
            android-chrome-192x192.png.svg android-chrome-512x512.png.svg; do
  output=${file%.svg}
  echo "rsvg-convert -w 1024 -h 1024 public/$file | convert - -resize ${output##*-} public/$output"
done

echo "rsvg-convert -w 256 -h 256 public/favicon.svg | convert - -define icon:auto-resize=16,24,32,48,64,128,256 public/favicon.ico"
echo
echo "=============================================="
echo "  Alternative: Use Online Favicon Generators"
echo "=============================================="
echo
echo "You can also use online tools like:"
echo "  - https://realfavicongenerator.net/"
echo "  - https://www.favicon-generator.org/"
echo
echo "Simply upload the favicon.svg file and download the generated package."
echo "Then replace the files in the public/ directory."
echo
