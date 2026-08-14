export interface Project {
  id: string
  title: string
  stack: string[]
  summary: string
  detail: string[]
  link: { label: string; url: string }
}

export interface ExperienceItem {
  role: string
  org: string
  location: string
  start: string
  end: string
  bullets: string[]
}

export interface StackGroup {
  category: string
  items: string[]
}

export interface EduItem {
  title: string
  sub: string
}

export interface CertItem {
  title: string
  detail: string
}

export const profile = {
  name: 'Suraj Sah Kanu',
  title: 'Machine Learning Engineer & AI Researcher',
  email: 'surajsah132@gmail.com',
  phone: '+977-9815271537',
  linkedin: 'https://linkedin.com/in/sahkanu34',
  github: 'https://github.com/sahkanu34',
  location: 'Kathmandu, Nepal',
  summary:
    'Machine Learning Engineer and AI Engineer with a proven track record of designing, developing, and deploying enterprise-ready AI systems. Expert in architecting advanced RAG pipelines, multi-agent AI systems (LangGraph, CrewAI), and custom LLM fine-tuning workflows using parameter-efficient methods (QLoRA/LoRA).',
}

export const focusAreas = [
  'RAG Pipelines',
  'Multi-Agent Systems',
  'LLM Fine-Tuning',
  'MLOps',
]

export const competencies = [
  'Machine Learning', 'Deep Learning', 'Computer Vision', 'Unsloth', 'Transformers', 'TRL', 'Hugging Face', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'YOLO',
  'Transfer Learning', 'Model Optimization', 'Retrieval-Augmented Generation',
  'Generative AI', 'MLOps', 'CI/CD', 'A/B Testing', 'Hypothesis Testing','LoRA/QLoRA', 'PEFT', 'LangChain', 'LangGraph', 'CrewAI', 'FastAPI', 'Docker', 'Kubernetes',
]

export const experience: ExperienceItem[] = [
  {
    role: 'Machine Learning and Deep Learning Research Intern',
    org: 'NAAMII — MAPMED Lab',
    location: 'Kathmandu, Nepal',
    start: 'Aug 2025',
    end: 'Apr 2026',
    bullets: [
      'Built end-to-end medical image embedding extraction pipeline processing 3D volumetric CT/MRI scans using MedicalNet ResNet models; implemented global and ROI-based embeddings across 4 feature layers (256–2048 dims).',
      'Engineered 3 fine-tuning strategies (partial, full, linear probe) for automated esophagitis grading using the RTOG dataset, achieving 92%+ validation accuracy via stratified k-fold cross-validation.',
      'Developed advanced 3D preprocessing pipeline with center-crop normalization, multi-scale augmentation, and NIfTI format conversion, reducing image processing overhead by 65% through batch automation.',
      'Created comprehensive embedding analysis framework with PCA, contrastive similarity metrics, Isolation Forest outlier detection, and 16+ automated visualizations for QA.',
      'Designed robust data utilities for CSV label merging, DICOM/NIfTI validation, cross-platform logging; documented 15+ technical workflows for reproducible research.',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'qwen-finetune',
    title: 'Production-Ready Qwen3-4B LLM Fine-Tuning Pipeline',
    stack: ['Unsloth', 'Transformers', 'TRL', 'PEFT', 'QLoRA'],
    summary: 'End-to-end QLoRA fine-tuning for Qwen3-4B-Instruct using 4-bit NF4 quantization on dual NVIDIA T4 GPUs.',
    detail: [
      'Configurable data pipeline supporting human-curated and LLM-generated synthetic instruction datasets for reproducible experimentation.',
      "Optimized training with TRL's SFTTrainer — LoRA rank, alpha, LR scheduling, gradient accumulation, sequence length, mixed precision.",
      'Automated experiment tracking: logs, checkpoints, evaluation metrics, outputs, tokenizer artifacts, configs.',
      'Evaluation and inference pipeline comparing base vs fine-tuned models via qualitative response analysis.',
      'Exported LoRA adapters, merged FP16 checkpoints, and GGUF for Hugging Face, Ollama, and llama.cpp deployment.',
    ],
    link: { label: 'Kaggle', url: 'https://www.kaggle.com/code/surajsahkanu/fine-tuning-qwen-4b-instruct-with-qlora' },
  },
  {
    id: 'hotel-booking',
    title: 'AI-Powered Multi-Agent Hotel Booking Assistant',
    stack: ['CrewAI', 'NVIDIA NIM', 'LiteLLM', 'Python'],
    summary: 'Specialized AI agents collaboratively handle travel consultation, hotel search, and booking assistance through sequential task orchestration.',
    detail: [
      'Autonomous agents analyze destination, budget, travel dates, hotel type, amenities, and special requests for personalized recommendations.',
      'Integrated NVIDIA NIM LLMs via LiteLLM for context-aware reasoning and agent-to-agent collaboration.',
      'Context sharing and sequential execution from requirement gathering to hotel recommendation and booking summary.',
      'Modular, extensible architecture supporting future hotel APIs, Maps, live pricing, payment gateways, RAG, Streamlit UI.',
      'Configurable JSONC agent definitions and environment-based configuration for rapid customization.',
    ],
    link: { label: 'GitHub', url: 'https://github.com/sahkanu34/Crewai_hotel_booking_AI' }, // TODO: replace with exact repo URL
  },
  {
    id: 'neural-rag',
    title: 'Neural RAG API Conversational AI',
    stack: ['FastAPI', 'LangChain', 'Qdrant', 'Redis', 'Docker'],
    summary: 'Production-ready RAG backend reducing LLM hallucinations by up to 95% through retrieval-grounded responses.',
    detail: [
      'Custom RAG pipeline integrating Qdrant Vector Database, NVIDIA embedding models, and LangChain for low-latency semantic search.',
      'Persistent multi-turn conversational memory using Redis with automatic session management and configurable TTL.',
      'Intelligent document ingestion pipeline: PDF processing, semantic chunking, embedding generation, scalable vector indexing.',
      'LLM-powered interview booking extraction service — structured candidate data extracted into a SQL database.',
      'Containerized with Docker Compose; modular service-oriented architecture with environment-based configuration.',
    ],
    link: { label: 'GitHub', url: 'https://github.com/sahkanu34/RAG_BACKEND_API' }, // TODO: replace with exact repo URL
  },
  {
  id:'compliance-ai',
  title:'Agentic AI Compliance Intelligence System',
  stack:['CrewAI','LLMs','Pydantic','Python','pdfplumber','Tesseract OCR'],
  summary:'Provenance-aware multi-agent document intelligence system that extracts, cross-validates, and reconciles conflicting compliance data from manufacturer PDFs.',
  detail:[
  'Built a multi-agent CrewAI pipeline with independent document extractors to extract, cross-validate, and reconcile conflicting compliance data from manufacturer PDFs.',
  'Implemented source-specific PDF extraction using pdfplumber for text and tables with automatic Tesseract OCR fallback, preserving extraction method and source provenance.',
  'Developed a strongly-typed Pydantic reconciliation layer that classifies fields as agree, conflict, document-only, or not-established while preserving conflicting source values.',
  'Implemented field-level normalization and cross-document reconciliation across product specifications, manufacturer information, test evidence, labeling, and importer documentation.',
  'Designed a provenance-aware confidence framework linking extracted fields to their originating document, page, extraction method, and confidence level for improved traceability and auditability.',
  'Generated machine-readable JSON reconciliation artifacts and human-readable Markdown compliance reports, transforming unstructured manufacturer documentation into review-ready compliance intelligence.'
  ],
  link:{label:'GitHub',url:'https://github.com/sahkanu34/Compliance_Agent'}, // TODO: replace with exact repo URL
  },
]

export const stack: StackGroup[] = [
  { category: 'Core AI/ML', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'YOLO', 'Transfer Learning'] },
  { category: 'LLM & GenAI', items: ['Hugging Face', 'LangChain', 'LangGraph', 'CrewAI', 'QLoRA/LoRA', 'PEFT', 'TRL', 'Unsloth'] },
  { category: 'Vector Databases', items: ['Qdrant', 'FAISS', 'Pinecone', 'ChromaDB'] },
  { category: 'Backend', items: ['FastAPI', 'SQLAlchemy', 'Redis', 'PostgreSQL', 'MySQL', 'SQLite'] },
  { category: 'MLOps & Cloud', items: ['Docker', 'Kubernetes', 'MLflow', 'AWS SageMaker', 'GitHub Actions'] },
  { category: 'Data & Tools', items: ['Pandas', 'NumPy', 'Plotly', 'Power BI', 'Git', 'Linux'] },
]

export const education: EduItem[] = [
  { title: 'Bachelor in Computer Application', sub: 'National Infotech College, Tribhuvan University · Nepal' },
  // { title: 'Higher Secondary Education (Science)', sub: 'Birgunj Public College · Birgunj, Nepal' },
]

export const certifications: CertItem[] = [
  { title: 'AWS AI/ML Scholar 2025', detail: 'Top 3% of applicants, AWS AI & ML Scholarship Program.' },
  { title: 'AWS Certified: ML Foundations', detail: 'ML principles, AWS services, cloud-based model training.' },
  { title: 'AWS Certified: Generative AI with AWS', detail: 'Amazon Bedrock, foundation models, GenAI app development.' },
]

export const positions = [
  {
    role: 'Teaching Assistant',
    org: 'Annual Nepal AI School',
    year: '2025',
    bullets: [
      'Supported instructors delivering AI and data science sessions; assisted students with hands-on labs and doubt resolution.',
      'Evaluated assignments and coordinated workshops and technical events.',
    ],
  },
]
