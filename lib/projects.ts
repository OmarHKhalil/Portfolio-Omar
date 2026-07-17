export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  tags: string[];
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
    paper?: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  featured: boolean;
  complexity?: 'medium' | 'high' | 'very-high';
  impact?: 'high' | 'very-high' | 'critical';
  category?: 'ml' | 'CV' | 'llm' | 'web' | 'fullstack' | 'RAG';
  order: number;
}

export const projects: Project[] = [
  {
    id: 'receipt-recognition',
    title: 'Receipt Recognition System',
    shortDescription: 'Production-ready 4-stage ML pipeline for automated receipt digitization',
    description:
      'An end-to-end production system that transforms receipt images into structured financial data. The pipeline combines image validation, region detection, text extraction, and product classification into a unified FastAPI service capable of processing receipts at scale.',
    image: '/projects/receipt-recognition.svg',
    tags: ['Production', 'Computer Vision', 'API'],
    technologies: ['FastAPI', 'YOLOv8', 'PyTorch', 'ResNet-50', 'Google Gemini', 'OpenCV'],
    links: {
      github: 'https://github.com/OmarHKhalil/receipt-recognition-system',
    },
    metrics: [
      { label: 'Image Validation Accuracy', value: '98.83%' },
      { label: 'Region Detection mAP50', value: '0.7693' },
      { label: 'Product Classification F1', value: '0.93' },
    ],
    featured: true,
    //complexity: 'very-high',
    impact: 'critical',
    //category: '',
    order: 1,
  },
  {
    id: 'finance-chatbot',
    title: 'Banking Finance Chatbot',
    shortDescription: 'Production RAG system for domain-specific banking customer support',
    description:
      'An intelligent chatbot tailored for the banking sector based on RAG technology. It integrates vector storage via ChromaDB with advanced large language models (LLMs) to provide accurate and domain-specific financial responses to customer inquiries while maintaining professional banking standards, and features a local fallback path to ensure uninterrupted service.',
    image: '/projects/finance-chatbot.svg',
    tags: ['RAG', 'Production', 'Banking'],
    technologies: ['FastAPI', 'ChromaDB', 'LangChain', 'Ollama', 'Google Gemini', 'HuggingFace Embeddings'],
    links: {
      github: 'https://github.com/OmarHKhalil/LLM-RAG-Projects/tree/main/Genai-Finance-Chatbot',
    },
    metrics: [
      { label: 'Vector DB', value: 'ChromaDB' },
      { label: 'Embedding Model', value: 'all-MiniLM-L6-v2' },
      { label: 'BERTScore', value: '88.29%' },
    ],
    featured: true,
    // complexity: 'high',
    impact: 'critical',
    //category: '',
    order: 3,
  },
  {
    id: 'churn-recommendation',
    title: 'Customer Churn & Recommendation System',
    shortDescription: 'Dual ML pipelines for predictive analytics and personalized product recommendations',
    description:
      'An intelligent banking retention system deployed as a real-time REST API. The system analyzes customer behavior to predict churn risks; if a high risk is detected, it automatically triggers a smart recommendation engine that filters out currently owned products to suggest new, personalized financial solutions, while generating customized marketing messages to ensure customer loyalty.',
    image: '/projects/churn-recommendation.svg',
    tags: ['ML Pipeline', 'API', 'Banking'],
    technologies: ['FastAPI', 'XGBoost', 'LightGBM', 'scikit-learn', 'pandas'],
    links: {
      github: 'https://github.com/OmarHKhalil/Machine-Learning-Projects/tree/main/churn-recommendation',
      demo: 'https://huggingface.co/spaces/Omarsy2/Bank-Retention-Recommendation',
    },
    metrics: [
      { label: 'Models', value: 'Dual Pipeline' },
      { label: 'First Pipeline F1', value: '0.88' },
      { label: 'Second Pipeline F1', value: '0.88' },
    ],
    featured: true,
    //complexity: 'high',
    impact: 'critical',
    //category: '',
    order: 4,
  },
  {
    id: 'docmind-ai',
    title: 'DocMind AI (Multi-Agent)',
    shortDescription: 'Privacy-focused local document intelligence system using multi-agent orchestration',
    description:
    'An intelligent document analysis platform that lets you engage in an expert dialogue with your files. DocMind AI leverages a multi-agent framework to process complex documents, reason through information, and provide accurate, context-aware answers to your queries with high precision.',
    image: '/projects/docmind-ai.svg',
    tags: ['LLM', 'Multi-Agent', 'Privacy', 'RAG'],
    technologies: ['Python', 'Streamlit', 'Ollama', 'ChromaDB', 'LangChain'],
    links: {
      github: 'https://github.com/OmarHKhalil/AI-Agents-Projects/tree/main/DocMind_AI_Multi-Agent',
    },
    metrics: [
      { label: 'Architecture', value: 'Multi-Agent' },
      { label: 'Inference', value: 'Local/Offline' },
      { label: 'Retrieval', value: 'Hybrid (Vector+Keyword)' },
    ],
    featured: true,
    //complexity: 'high',
    impact: 'high',
    //category: 'llm',
    order: 2, 
  },
  {
    id: 'menu-classification',
    title: 'Menu Classification System',
    shortDescription: 'Full-stack ML system with training, API, and interactive UI',
    description:
      'A complete end-to-end machine learning application classifying restaurant images into 5 categories. Demonstrates the entire ML lifecycle: model training with transfer learning, REST API deployment with FastAPI, and interactive web UI with Streamlit for real-time predictions.',
    image: '/projects/menu-classification.svg',
    tags: ['Full-Stack', 'Computer Vision', 'UI'],
    technologies: ['PyTorch', 'ResNet50', 'FastAPI', 'Streamlit', 'OpenCV'],
    links: {
      github: 'https://github.com/OmarHKhalil/Deep-Learning-Projects/tree/main/NutriVision-Food-Classification',
    },
    metrics: [
      { label: 'Categories', value: '5' },
      { label: 'F1-Score', value: '0.92' },
      { label: 'Test Loss', value: '0.2281' },
    ],
    featured: true,
    //complexity: 'high',
    impact: 'very-high',
    //category: 'CV',
    order: 5,
  },
  {
    id: 'nutrivision',
    title: 'NutriVision: Food Classification',
    shortDescription: 'Comparative study of CNN architectures and Transfer Learning for food recognition.',
    description:
      'A deep learning project comparing various computer vision approaches for food image classification. The system evaluates the performance of state of the art Transfer Learning models (ResNet50 & EfficientNet-B0) against a custom-built AdvancedFoodCNN. It demonstrates the impact of input resolution, data augmentation, and architectural choices on model generalization and training efficiency.',
    image: '/projects/nutrivision.svg',
    tags: ['Computer Vision', 'Deep Learning', 'PyTorch', 'CNN'],
    technologies: ['PyTorch', 'ResNet50', 'EfficientNet', 'TensorBoard', 'TorchMetrics'],
    links: {
      github: 'https://github.com/OmarHKhalil/Deep-Learning-Projects/tree/main/NutriVision-Food-Classification',
      demo: 'https://huggingface.co/spaces/Omarsy2/nutrivision-app',
    },
    metrics: [
      { label: 'Categories', value: '30' },
      { label: 'Best Accuracy', value: '79.18%' },
      { label: 'Top Model', value: 'ResNet50' },
    ],
    featured: true,
    //complexity: 'high',
    impact: 'high',
    //category: 'CV',
    order: 6,
  },
  {
    id: 'invoice-classification',
    title: 'Invoice Classification (ResNet-50)',
    shortDescription: 'Enterprise document validation achieving 98.83% accuracy',
    description:
      'A high-precision image classification system using transfer learning to categorize documents as Invoice, Menu, or Irrelevant. Trained on 4,200+ hybrid images with sophisticated data augmentation, this production-ready classifier supports enterprise document automation workflows.',
    image: '/projects/invoice-classification.svg',
    tags: ['Transfer Learning', 'Document Processing', 'Enterprise'],
    technologies: ['PyTorch', 'ResNet-50', 'Transfer Learning', 'Data Augmentation', 'OpenCV'],
    links: {
      github: 'https://github.com/yourusername/invoice-classification',
    },
    metrics: [
      { label: 'Accuracy', value: '98.83%' },
      { label: 'Training Dataset', value: '4,200+ images' },
      { label: 'Input Size', value: '448×448' },
    ],
    featured: false,
    //complexity: 'high',
    impact: 'very-high',
    //category: 'CV',
    order: 8,
  },
  {
    id: 'receipt-detection',
    title: 'Receipt Object Detection (YOLOv8)',
    shortDescription: 'State-of-art object detection for receipt component localization',
    description:
      'Specialized object detection model using YOLOv8 to identify and localize key receipt components including totals, items, dates, invoice numbers, and store names. Trained on ReceiptSense dataset with 8,439+ annotated images achieving 0.825 mAP50.',
    image: '/projects/receipt-detection.svg',
    tags: ['Object Detection', 'YOLOv8', 'Spatia Localization'],
    technologies: ['Ultralytics(YOLOv8)', 'PyTorch', 'OpenCV', 'Advanced Augmentation'],
    links: {
      github: 'https://github.com/yourusername/receipt-detection',
    },
    metrics: [
      { label: 'Model', value: 'YOLOv8m' },
      { label: 'mAP50', value: '0.825' },
      { label: 'Dataset Size', value: '~12 GB' },
    ],
    featured: false,
    //complexity: 'high',
    impact: 'very-high',
    //category: 'CV',
    order: 7,
  },
  {
    id: 'askmydocs',
    title: 'AskMyDocs: PDF RAG System',
    shortDescription: 'Local retrieval-augmented generation for document Q&A',
    description:
      'A sophisticated RAG prototype enabling natural language queries over PDF documents. Combines document chunking, embedding generation, and vector search with local LLMs for offline document intelligence.',
    image: '/projects/askmydocs.svg',
    tags: ['RAG', 'LLM', 'PDF Processing'],
    technologies: ['LangChain', 'ChromaDB', 'HuggingFace Embeddings', 'Ollama', 'PyPDF'],
    links: {
      github: 'https://github.com/yourusername/askmydocs',
    },
    metrics: [
      { label: 'Vector DB', value: 'ChromaDB' },
      { label: 'LLM', value: 'Ollama' },
      { label: 'Privacy', value: 'Local' },
    ],
    featured: false,
    //complexity: 'medium',
    impact: 'very-high',
    //category: 'llm',
    order: 9,
  },
  {
    id: 'balanced-meal',
    title: 'Balanced Meal Planner',
    shortDescription: 'LLM-powered agent for nutritionally balanced meal design',
    description:
      'An intelligent meal planning agent leveraging prompt engineering and structured outputs to generate nutritionally balanced meals from available ingredients. Integrates multiple LLM providers (Gemini, Llama, Qwen) with dynamic tool schemas.',
    image: '/projects/balanced-meal.svg',
    tags: ['LLM', 'Agents', 'Nutrition'],
    technologies: ['LangChain', 'Pydantic', 'Google Gemini', 'ChatOllama', 'Structured Output'],
    links: {
      github: 'https://github.com/yourusername/balanced-meal-planner',
    },
    metrics: [
      { label: 'LLM Models', value: '3+' },
      { label: 'Tool Schemas', value: 'Structured' },
      { label: 'Output Format', value: 'JSON' },
    ],
    featured: false,
    //complexity: 'medium',
    impact: 'very-high',
    //category: 'llm',
    order: 10,
  },
  {
    id: 'fashion-mnist',
    title: 'Fashion Image Classification',
    shortDescription: 'Progressive CNN development from linear to advanced architectures',
    description:
      'A comprehensive deep learning project demonstrating CNN evolution for FashionMNIST classification. Shows progression from basic architectures to advanced models with batch normalization, dropout, and optimization techniques.',
    image: '/projects/fashion-mnist.svg',
    tags: ['CNN', 'PyTorch', 'Deep Learning'],
    technologies: ['PyTorch', 'TorchVision', 'VGG-inspired CNNs', 'Batch Normalization', 'Dropout'],
    links: {
      github: 'https://github.com/yourusername/fashion-mnist',
    },
    metrics: [
      { label: 'Dataset', value: 'FashionMNIST' },
      { label: 'Classes', value: '10' },
      { label: 'Training Samples', value: '60k' },
    ],
    featured: false,
    //complexity: 'medium',
    impact: 'high',
    //category: 'CV',
    order: 11,
  },
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}

export function getAllProjects() {
  return projects.sort((a, b) => a.order - b.order);
}

export function getProjectsByCategory(category: Project['category']) {
  return projects.filter((p) => p.category === category).sort((a, b) => a.order - b.order);
}
