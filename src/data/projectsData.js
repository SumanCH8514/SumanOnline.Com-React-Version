import frontpageMakerImg from '@/assets/projects/frontpage-maker.png';
import hisabkhataImg from '@/assets/projects/hisabkhata.png';
import hisabkhataPosImg from '@/assets/projects/hisabkhata_POS.png';
import studenthubImg from '@/assets/projects/studenthub.png';
import sumanAiImg from '@/assets/projects/suman_ai.png';
import sumanMoviesImg from '@/assets/projects/sumanmovies.png';
import sumanMusicImg from '@/assets/projects/sumanmusic.png';
import sumanTestMailImg from '@/assets/projects/sumantestmail.png';
import tempSumanMailImg from '@/assets/projects/tempsumanmail.png';

export const projectsData = [
  {
    id: 'sumanai-chat',
    title: 'SumanAI Chat',
    description: 'Advanced conversational AI workspace with neural multi-modal reasoning, smart assistant capabilities, code debugging, and automated contextual workflows.',
    longDescription: 'SumanAI Chat delivers an enterprise-grade artificial intelligence workspace designed for seamless conversational interactions, code analysis, real-time query resolution, and document reasoning. Powered by low-latency edge inference and a sleek dark-mode-first aesthetic.',
    category: 'AI Tools',
    badge: 'AI Assistant',
    status: 'Live Production',
    link: 'https://chat.sumanonline.com/',
    image: sumanAiImg,
    gallery: [
      { label: 'Chat Workspace', image: sumanAiImg },
      { label: 'Neural Reasoning Engine', image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Code Analysis & Terminal', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Multi-modal LLM chat interface with streaming responses',
      'Context-aware code generation and syntax debugger',
      'Ultra low-latency global edge API routing',
      'Persistent encrypted session history and exportable logs'
    ],
    techStack: ['React 19', 'Vite', 'Cloudflare Workers', 'Tailwind Tokens', 'Framer Motion'],
    tags: ['Conversational AI', 'LLM', 'AI Assistant', 'Neural Engine']
  },
  {
    id: 'hisabkhata',
    title: 'HisabKhata',
    description: 'Modern digital ledger and bookkeeping SaaS for tracking daily business cashflow, credit/debit transactions, and customer accounts.',
    longDescription: 'HisabKhata replaces manual paper ledgers with a cloud-synchronized bookkeeping suite. It empowers small businesses, retailers, and freelancers to monitor cashflow, send WhatsApp automated payment reminders, generate GST-compliant summaries, and reconcile customer balances in real time.',
    category: 'Finance',
    badge: 'Accounting',
    status: 'Live Production',
    link: 'https://hisabkhata.sumanonline.com/',
    image: hisabkhataImg,
    gallery: [
      { label: 'Customer Ledger Dashboard', image: hisabkhataImg },
      { label: 'POS Terminal Counter Sync', image: hisabkhataPosImg },
      { label: 'Cashflow Analytics & Reports', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Instant Jama & Udhar (Credit/Debit) transaction logging',
      'One-click PDF financial statement & report generation',
      'Customer profile directory with automated balance alerts',
      'Real-time cloud database backup with offline resilience'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Framer Motion', 'REST API'],
    tags: ['Accounting', 'Ledger', 'Cashflow', 'Fintech']
  },
  {
    id: 'hisabkhata-pos',
    title: 'HisabKhata POS',
    description: 'Fast, cloud-ready Point-of-Sale (POS) system with barcode scanning, automated receipt generation, and real-time inventory tracking.',
    longDescription: 'A high-speed retail checkout platform tailored for retail counters and supermarkets. HisabKhata POS supports rapid barcode entry, automated invoice printing, stock depletion tracking, and direct sync with HisabKhata bookkeeping accounts.',
    category: 'Finance',
    badge: 'POS & Billing',
    status: 'Live Production',
    link: 'https://pos.hisabkhata.sumanonline.com/',
    image: hisabkhataPosImg,
    gallery: [
      { label: 'Point-of-Sale Register', image: hisabkhataPosImg },
      { label: 'Bookkeeping Ledger Integration', image: hisabkhataImg },
      { label: 'Inventory & Stock Management', image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c0?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Sub-second barcode scanning and instant item lookup',
      'Thermal receipt printing and digital invoice dispatch',
      'Live stock count warning & inventory restock triggers',
      'Integrated payment checkout with QR and card modes'
    ],
    techStack: ['React', 'Web USB/Serial API', 'IndexedDB', 'Fintech Engine'],
    tags: ['POS System', 'Billing', 'Inventory', 'Retail']
  },
  {
    id: 'sumancloud',
    title: 'SumanCloud',
    description: 'High-speed secure cloud storage & file synchronization platform with encrypted file vault, shared links, and multi-device access.',
    longDescription: 'SumanCloud gives users complete sovereign control over their digital documents and media. Built with end-to-end zero-knowledge encryption, lightning-fast chunked uploads, and granular link sharing with expiration timers.',
    category: 'Cloud',
    badge: 'Cloud Hub',
    status: 'Active Service',
    link: 'https://github.com/SumanCH8514/SumanCloud.git',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      { label: 'Cloud Drive Explorer', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Encrypted Vault & Security', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Direct Media Previewer', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Client-side AES-256 zero-knowledge encryption',
      'Resumable multi-part chunked file transfers',
      'Custom link sharing with password protection and expiry',
      'High-resolution inline image and video playback preview'
    ],
    techStack: ['React', 'Node.js', 'S3 Object Storage', 'Web Cryptography API'],
    tags: ['Cloud Drive', 'Encrypted Vault', 'File Sync', 'Storage']
  },
  {
    id: 'tempsumanmail',
    title: 'TempSumanMail',
    description: 'Instant disposable temporary email generator providing privacy-focused throwaway mailboxes to prevent inbox spam.',
    longDescription: 'TempSumanMail allows users to instantly generate ephemeral email addresses on custom domains. Emails arrive in real time over WebSockets without requiring account registrations, safeguarding users from spam campaigns and trackers.',
    category: 'Utility',
    badge: 'Privacy',
    status: 'Live Production',
    link: 'https://tempsumanmail.sumanonline.com/',
    image: tempSumanMailImg,
    gallery: [
      { label: 'Ephemeral Inbox Interface', image: tempSumanMailImg },
      { label: 'Virtual SMTP Debugger', image: sumanTestMailImg },
      { label: 'Real-time WebSocket Pipeline', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Instant mailbox generation with zero sign-up required',
      'Live incoming mail notification stream via WebSockets',
      'Automatic inbox lifecycle expiry & auto-purging',
      'Full MIME email rendering with attachment downloads'
    ],
    techStack: ['React 19', 'Cloudflare Email Routing', 'WebSockets', 'Tailwind'],
    tags: ['Temp Mail', 'Privacy', 'Disposable Inbox', 'Spam Free']
  },
  {
    id: 'sumantestmail',
    title: 'SumanTestMail',
    description: 'Developer sandbox and virtual SMTP server for testing, previewing, and debugging transactional emails before production dispatch.',
    longDescription: 'A dedicated developer utility that captures transactional emails in a safe virtual sandbox. Inspect raw email headers, verify HTML and plain-text renderings, test spam scores, and validate authentication records (SPF, DKIM, DMARC) before going live.',
    category: 'Utility',
    badge: 'Dev Tool',
    status: 'Live Production',
    link: 'https://sumantestmail.sumanonline.com/',
    image: sumanTestMailImg,
    gallery: [
      { label: 'Sandbox Inbox & Header Inspector', image: sumanTestMailImg },
      { label: 'Disposable Mail Engine', image: tempSumanMailImg },
      { label: 'Raw Payload & MIME Parser', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Sandbox SMTP inbox for developer testing without spamming real users',
      'HTML, Plain Text, and Raw Header inspection tools',
      'Spam score analytics and broken link validation',
      'REST API and Webhook integrations for CI/CD test pipelines'
    ],
    techStack: ['React', 'Node SMTP Engine', 'Express', 'Vite'],
    tags: ['Email Sandbox', 'SMTP Testing', 'Dev Tools', 'API']
  },
  {
    id: 'sumanmusic',
    title: 'SumanMusic',
    description: 'A high-performance music streaming platform with Shorts integration, real-time sync, and personalized playlists.',
    longDescription: 'SumanMusic provides an immersive audio streaming environment equipped with lossless audio playback, synchronized lyrics, audio visualizers, high-energy music shorts, and customized playlist curation.',
    category: 'Entertainment',
    badge: 'Flagship',
    status: 'Live Production',
    link: 'https://songs.sumanmusic.com',
    image: sumanMusicImg,
    gallery: [
      { label: 'Audio Player & Streaming UI', image: sumanMusicImg },
      { label: 'Curated Playlists & Discovery', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Music Shorts & Visualizer', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Gapless audio streaming with adaptive bitrate optimization',
      'Dynamic audio spectrum visualizer powered by Web Audio API',
      'Personalized favorites, playlist management, and offline caching',
      'Vertical Music Shorts video format with gesture navigation'
    ],
    techStack: ['React', 'Web Audio API', 'Howler.js', 'PWA', 'CDN'],
    tags: ['React', 'Audio Engine', 'Cloud Sync', 'PWA']
  },
  {
    id: 'frontpagemaker',
    title: 'FrontPageMaker',
    description: 'Automated academic document generator for universities, featuring elegant formatting, customizable themes, and batch generation.',
    longDescription: 'Designed specifically for university students and educators to produce standard-compliant project front pages, assignment title sheets, and formal reports with zero alignment hassle. Features live visual canvas rendering and instant high-res vector PDF generation.',
    category: 'SaaS Tool',
    badge: 'Academic',
    status: 'Live Production',
    link: 'https://sumanonline.com/FrontPageMaker/',
    image: frontpageMakerImg,
    gallery: [
      { label: 'PDF Canvas Generator & Form', image: frontpageMakerImg },
      { label: 'Academic University Templates', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Vector PDF Rendering Output', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Dynamic HTML5 Canvas WYSIWYG live layout preview',
      'Pre-configured university seals, borders, and typography',
      'Single-click high-resolution PDF and PNG vector export',
      'Client-side execution with 100% privacy and zero data upload'
    ],
    techStack: ['HTML5 Canvas', 'jsPDF', 'React', 'CSS Architecture'],
    tags: ['PDF Engine', 'Canvas', 'Document Generator']
  },
  {
    id: 'studenthub',
    title: 'StudentHub',
    description: 'A comprehensive collaborative platform for students to connect, share study resources, and discuss academic topics.',
    longDescription: 'StudentHub brings collegiate academic communities together in one modern digital campus. Share lecture notes, discuss coursework in topic channels, arrange peer study sessions, and access community-curated question banks.',
    category: 'Community',
    badge: 'Web App',
    status: 'Live Production',
    link: 'https://studentHub.sumanonline.com/',
    image: studenthubImg,
    gallery: [
      { label: 'Community Feed & Channels', image: studenthubImg },
      { label: 'Study Resource Vault', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Peer Collaboration Rooms', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Interactive subject channels and threaded discussion boards',
      'Verified academic resource repository with rating system',
      'Real-time peer chat and collaboration spaces',
      'Mobile-responsive UI optimized for low-bandwidth networks'
    ],
    techStack: ['React', 'Firebase', 'Tailwind', 'Realtime DB'],
    tags: ['Community', 'Web Platform', 'Real-time']
  },
  {
    id: 'ghibli-converter',
    title: 'Ghibli AI Converter',
    description: 'Neural style transfer web tool converting standard photographs into artistic Studio Ghibli cinematic animation aesthetics.',
    longDescription: 'An AI-powered creative engine that applies neural anime style transformations to user-uploaded portraits and landscapes. Produces iconic hand-drawn art visuals reminiscent of classic Hayao Miyazaki anime masterpieces.',
    category: 'AI Tools',
    badge: 'AI Powered',
    status: 'Active Service',
    link: 'https://sumanonline.com/Projects/Ghibli',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      { label: 'Style Transfer Preview', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Neural Processing Pipeline', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'One-click neural anime style transfer filters',
      'High-definition side-by-side comparison slider',
      'GPU accelerated client inference with WebGL',
      'Instant uncompressed artwork download'
    ],
    techStack: ['TensorFlow.js', 'WebGL', 'React', 'Canvas API'],
    tags: ['AI Model', 'Style Transfer', 'Image Processing']
  },
  {
    id: 'ai-image-gen',
    title: 'AI Image Generator',
    description: 'Prompt-based generative image synthesis studio creating photorealistic artwork and conceptual design illustrations.',
    longDescription: 'A generative art workspace leveraging advanced diffusion models to transform descriptive text prompts into breathtaking artwork, concept designs, digital paintings, and high-fidelity photorealistic assets.',
    category: 'AI Tools',
    badge: 'Generative AI',
    status: 'Active Service',
    link: 'https://sumanonline.com/Projects/image-generation/',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      { label: 'Prompt Studio & Canvas', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Art Gallery & Seed Variations', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Prompt enhancer and style preset selector (3D, Cinematic, Anime)',
      'Multi-resolution aspect ratio generation presets',
      'Seed control for consistent iterative styling',
      'High-speed cloud GPU generation dispatch'
    ],
    techStack: ['React', 'Diffusion API', 'Framer Motion'],
    tags: ['Generative AI', 'Prompt Engine', 'Creative Studio']
  },
  {
    id: 'movie-streaming',
    title: 'SumanOnline Movies',
    description: 'Premium streaming portal featuring high-resolution video streams, categorized catalogs, and responsive playback controls.',
    longDescription: 'A cinema streaming portal offering curated catalogs of films and documentaries. Features adaptive HLS multi-bitrate streaming, resume playback history, custom subtitles, and ultra-smooth mobile navigation.',
    category: 'Entertainment',
    badge: 'Popular',
    status: 'Live Production',
    link: 'https://movies.sumanonline.com/',
    image: sumanMoviesImg,
    gallery: [
      { label: 'Movies Catalog & Carousel', image: sumanMoviesImg },
      { label: 'Video Player & HLS Stream', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Curated Collections', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Adaptive bitrate streaming powered by HLS.js',
      'Categorized catalogs with fast search and filters',
      'Local playback progress resumption and watch history',
      'Custom cinema theater mode with keyboard hotkeys'
    ],
    techStack: ['React', 'HLS.js', 'Video.js', 'Cloudflare Stream'],
    tags: ['Streaming', 'Video.js', 'CDN Powered']
  },
  {
    id: 'sumanonline-portfolio',
    title: 'SumanOnline Portfolio',
    description: 'Interactive ecosystem portfolio platform built with React 19, Framer Motion, and custom glassmorphism design tokens.',
    longDescription: 'The central hub and showcase of Suman Chakraborty’s digital ecosystem. Built on React 19 and modern CSS custom properties, featuring light/dark theme switches, dynamic route loaders, interactive project previews, and instant payment portals.',
    category: 'Showcase',
    badge: 'Flagship',
    status: 'Live Production',
    link: 'https://cv.sumanonline.com',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      { label: 'Portfolio Ecosystem Home', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Projects Showcase & Filter', image: sumanAiImg },
      { label: 'UPI Terminal & Payment Flow', image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Fluid page transitions powered by Framer Motion',
      'Adaptive light and dark mode theme switching system',
      'Production-ready modal dialogs and interactive project details',
      'Automated deployment setup for Cloudflare Pages'
    ],
    techStack: ['React 19', 'Vite', 'Framer Motion', 'Vanilla CSS Tokens'],
    tags: ['React 19', 'Framer Motion', 'Vite']
  },
  {
    id: 'url-shortener',
    title: 'Fast URL Shortener',
    description: 'Cloud URL shortening service with redirection management, click routing, and custom alias support.',
    longDescription: 'A blazing-fast edge link shortening platform delivering instantaneous HTTP 301/302 redirects with analytics, QR generation for shortened links, and custom alias vanity domains.',
    category: 'Utility',
    badge: 'Cloud SaaS',
    status: 'Live Production',
    link: 'https://url.sumanonline.com/',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      { label: 'URL Shortener Interface', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Analytics & Redirect Router', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Sub-10ms URL redirection routing via global edge network',
      'Custom vanity alias support and dynamic QR generator',
      'Click count statistics and referrer analytics',
      'Rate-limited anti-abuse API gateway'
    ],
    techStack: ['Cloudflare Workers', 'KV Storage', 'React', 'REST API'],
    tags: ['URL Redirection', 'Cloud API', 'Fast Routing']
  },
  {
    id: 'qr-generator',
    title: 'QR Payment Gateway',
    description: 'Interactive UPI payment generator producing dynamic verifiable QR codes with customizable merchant amounts.',
    longDescription: 'A fintech terminal for generating real-time NPCI-compliant UPI QR codes. Allows payers to scan directly with Google Pay, PhonePe, Paytm, or BHIM with preset amounts and instant transaction verification.',
    category: 'Finance',
    badge: 'Instant UPI',
    status: 'Live Production',
    link: 'https://sumanonline.com/pay-me/',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      { label: 'UPI Payment Terminal', image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Receipt & Transaction Breakdown', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Dynamic UPI string formatting conforming to NPCI guidelines',
      'One-click UPI ID clipboard copying and preset amount chips',
      'High-contrast scan-ready SVG/Canvas QR rendering',
      'Automated timer countdown with transaction safety tips'
    ],
    techStack: ['React', 'qrcode.react', 'Fintech Engine', 'CSS Tokens'],
    tags: ['Fintech', 'UPI QR', 'Dynamic Pay']
  },
  {
    id: 'mp3-meta-editor',
    title: 'Mp3 ID3 Tag Editor',
    description: 'Browser-based ID3 metadata and album art editor for lossless MP3 file tagging and catalog organization.',
    longDescription: 'A client-side audio tagger to view and modify ID3v1 and ID3v2 tags directly in the browser. Embed custom album artwork, fix artist names, edit genres, and export cleanly tagged audio tracks.',
    category: 'Media',
    badge: 'Audio Tool',
    status: 'Active Service',
    link: 'https://sumanonline.likesyou.org/SumanMp3Tag/',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      { label: 'Metadata Editor Interface', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Album Artwork Inserter', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Read and write ID3v2.3 / ID3v2.4 tags in pure JavaScript',
      'Lossless in-memory audio byte modification',
      'Batch track tagging and auto-naming formatters',
      'High-res image downscaling and artwork embedding'
    ],
    techStack: ['BrowserID3', 'Web Audio', 'Blob API', 'JavaScript'],
    tags: ['ID3 Engine', 'Metadata', 'Audio Tools']
  },
  {
    id: 'watermark-adder',
    title: 'Watermark Adder Studio',
    description: 'Client-side image branding utility to apply customizable text and logo watermarks in batch mode.',
    longDescription: 'A privacy-first batch watermarking studio for photographers and content creators. Apply tiled or anchored logos, adjust opacity, shadow, and font styling with zero server uploads.',
    category: 'Media',
    badge: 'Media Tool',
    status: 'Active Service',
    link: 'https://sumanonline.likesyou.org/Watermark-gen/',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      { label: 'Watermark Studio Controls', image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Batch Processing Canvas', image: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Client-side batch image watermarking with zero quality degradation',
      'Custom typography, opacity, rotation, and logo overlay',
      'Preset placement grid (9-point anchor or diagonal repeating)',
      'ZIP batch export for hundreds of images in seconds'
    ],
    techStack: ['HTML5 Canvas', 'JSZip', 'FileSaver.js', 'React'],
    tags: ['Image Canvas', 'Branding', 'Batch Processing']
  },
  {
    id: 'm4a-to-mp3',
    title: 'Audio Transcoder',
    description: 'High-speed browser audio transcoder converting M4A, AAC, WAV, and audio files into standard MP3 format.',
    longDescription: 'High-performance audio format converter operating in the browser via WebAssembly. Convert voice notes, AAC podcasts, and FLAC/WAV tracks into MP3 files with customizable bitrates.',
    category: 'Utility',
    badge: 'Fast Converter',
    status: 'Active Service',
    link: 'https://plyr.0-0-0.click/m4a-to-mp3/',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      { label: 'Transcoder Dashboard', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Bitrate & Quality Settings', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'WebAssembly-accelerated audio transcoding pipeline',
      'Supports M4A, AAC, OGG, WAV, and FLAC inputs',
      'Customizable CBR/VBR MP3 encoding settings',
      '100% private local browser conversion'
    ],
    techStack: ['FFmpeg WASM', 'Web Workers', 'React', 'Audio API'],
    tags: ['WebAudio', 'Transcoding', 'Format Conversion']
  },
  {
    id: 'video-player',
    title: 'Online Video Player',
    description: 'Video player client supporting direct CDN streams, HLS playlists, and multi-format video playback.',
    longDescription: 'A versatile web media player designed for streaming video files directly from URLs, CDN endpoints, and M3U8 live playlists with hardware acceleration and responsive playback.',
    category: 'Media',
    badge: 'Video Player',
    status: 'Active Service',
    link: 'https://plyr.0-0-0.click/SumanCND/new/',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      { label: 'Video Player Viewport', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Stream URL & HLS Console', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Multi-format support for MP4, WebM, MKV, and HLS M3U8',
      'Picture-in-picture mode and theater full-screen view',
      'Playback speed multiplier from 0.25x up to 3.0x',
      'Clean keyboard shortcuts for seeking and volume'
    ],
    techStack: ['Video.js', 'HLS.js', 'HTML5 Video', 'CSS'],
    tags: ['HLS', 'Video.js', 'CDN Playback']
  },
  {
    id: 'photo-gallery',
    title: 'Photo Gallery WebApp',
    description: 'High-resolution photo sharing and album management platform with responsive lightbox view.',
    longDescription: 'An elegant photo showcase platform designed for visual storytellers and photographers. Features masonry grid layouts, fluid lightbox previews, EXIF data inspection, and album organization.',
    category: 'Media',
    badge: 'Photo Hub',
    status: 'Active Service',
    link: 'https://sumanonline.likesyou.org/PhotoGallery/',
    image: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      { label: 'Photo Masonry Grid', image: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Full Lightbox Previewer', image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Responsive masonry photo grid with lazy loading',
      'Touch-friendly lightbox zoom and swipe gestures',
      'EXIF metadata reader for camera settings and ISO',
      'High-speed thumbnail generation and WebP caching'
    ],
    techStack: ['React', 'PhotoSwipe', 'Tailwind', 'IntersectionObserver'],
    tags: ['Photo Gallery', 'Lightbox', 'Image Viewer']
  },
  {
    id: 'ringtone-downloader',
    title: 'Ringtone Downloader',
    description: 'Search and preview portal for trending mobile ringtones, sound effects, and alert tones.',
    longDescription: 'An audio hub for browsing, auditioning, and downloading high-quality mobile ringtones, notification chirps, and retro tone sound effects with instant previews.',
    category: 'Entertainment',
    badge: 'Audio Hub',
    status: 'Active Service',
    link: 'https://sumanonline.com/Projects/ringtone/',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      { label: 'Ringtone Library & Preview', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Categories & Popular Soundtracks', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Instant audio waveform preview before downloading',
      'Categorized catalogs (Anime, Classical, Alerts, Cinematic)',
      'Fast single-click direct MP3/M4R iOS downloads',
      'Lightweight bundle with zero intrusive advertisements'
    ],
    techStack: ['React', 'HTML5 Audio', 'CSS Modules'],
    tags: ['Audio Preview', 'Mobile Ringtones', 'Fast Download']
  },
  {
    id: 'likesyou-portal',
    title: 'SumanOnline Tools',
    description: 'Multi-purpose web utilities sandbox featuring productivity helpers, converters, and generators.',
    longDescription: 'A modular suite of daily web tools and utilities including text encoders, JSON formatters, hash calculators, regex checkers, and color palette generators.',
    category: 'Utility',
    badge: 'Tool Suite',
    status: 'Active Service',
    link: 'https://sumanonline.likesyou.org/',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      { label: 'Tools Dashboard & Grid', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80' },
      { label: 'JSON Formatter & Converter', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Comprehensive collection of 20+ web utility modules',
      'All tools execute 100% clientside in the browser',
      'Dark/Light UI mode with persistent preferences',
      'Instant search and keyboard navigation shortcuts'
    ],
    techStack: ['React', 'Web Utilities', 'CryptoJS', 'CSS Tokens'],
    tags: ['Utilities', 'Web Sandbox', 'Tools']
  },
  {
    id: 'mobile-recharge',
    title: 'Mobile Recharge Hub',
    description: 'Convenient recharge portal supporting major telecom providers with instant transaction redirection.',
    longDescription: 'A streamlined web portal facilitating rapid mobile prepaid recharge plans, DTH renewals, and data pack top-ups with seamless operator redirection.',
    category: 'Utility',
    badge: 'Telecom',
    status: 'Active Service',
    link: 'https://recharge.sumanonline.com/',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      { label: 'Recharge Portal Gateway', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Operator Plans & Offers', image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Plan search for top telecom operators (Jio, Airtel, Vi, BSNL)',
      'Smart number validation and operator circle auto-detection',
      'Instant checkout routing with trusted payment gateways',
      'Clean, distraction-free mobile-first layout'
    ],
    techStack: ['React', 'Telecom API', 'Tailwind', 'REST'],
    tags: ['Telecom', 'Recharge', 'Instant Services']
  },
  {
    id: 'demo-portal',
    title: 'Projects Demo Portal',
    description: 'Interactive preview lab for cutting-edge prototypes, experimental apps, and upcoming digital services.',
    longDescription: 'The sandbox testing arena where experimental prototypes, beta releases, and emerging technology concepts are showcased before official deployment.',
    category: 'Showcase',
    badge: 'Beta Lab',
    status: 'Active Service',
    link: 'https://sumanonline.com/',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      { label: 'Experimental Demo Lab', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80' },
      { label: 'Prototype Sandbox', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80' }
    ],
    features: [
      'Beta playground for upcoming features and integrations',
      'Interactive component demos and live sandbox environments',
      'Community feedback and issue submission channel',
      'Instant deployment tracking and version history'
    ],
    techStack: ['React 19', 'Next.js', 'Vite', 'Framer Motion'],
    tags: ['Sandbox', 'Prototypes', 'Beta Apps']
  }
];
