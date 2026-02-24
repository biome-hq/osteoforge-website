export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  heroImage?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  collection: string;
  price: number;
  description: string;
  longDescription: string;
  materials: string;
  dimensions?: string;
  images: string[];
  featured?: boolean;
  new?: boolean;
  indications?: string[];
  contraindications?: string[];
  keyFeatures?: string[];
  regulatoryStatus?: string;
  catalogNumber?: string;
}

export const collections: Collection[] = [
  {
    id: "patient-specific",
    name: "Patient-Specific Implants",
    slug: "patient-specific",
    description: "Custom 3D printed implants designed from individual CT data for precise anatomical fit",
    image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=1920&q=80",
  },
  {
    id: "bone-grafts",
    name: "Porous Bone Grafts",
    slug: "bone-grafts",
    description: "Bioactive osteoconductive scaffolds for bone regeneration in trauma and defect management",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80",
  },
  {
    id: "bone-membranes",
    name: "Porous Bone Membranes",
    slug: "bone-membranes",
    description: "Bioactive membranes for guided bone regeneration in dental, craniofacial, and orthopedic applications",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1920&q=80",
  },
  {
    id: "fixation-cmf",
    name: "Bioresorbable Fixation",
    slug: "fixation-cmf",
    description: "Bioresorbable plates and screws for craniomaxillofacial fracture stabilization",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&q=80",
  },
  {
    id: "scaffold-system",
    name: "Seribo Scaffold System",
    slug: "scaffold-system",
    description: "The complete Seribo platform for bone regeneration across trauma, tumor, and defect management",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1920&q=80",
  },
];

export const products: Product[] = [
  // Patient-Specific Implants
  {
    id: "psi-craniofacial",
    name: "Craniofacial PSI",
    slug: "craniofacial-psi",
    collection: "patient-specific",
    price: 0,
    description: "Patient-specific craniofacial implant for precise anatomical reconstruction",
    longDescription: "The Craniofacial PSI is 3D printed from our patented Seribo\u2122 material, precisely tailored to match individual defects using high-resolution CT data. The porous architecture, enriched with naturally occurring RGD sequences in silk microfibers, promotes osteoblast attachment, bone ingrowth, and regeneration. PSI enables more efficient surgeries by providing a precise fit that eliminates intraoperative implant modifications, reducing wound exposure, minimizing operating time, and contributing to faster recovery.",
    materials: "Seribo\u2122 (Silk Fibroin Microfiber + Polycaprolactone Composite)",
    dimensions: "Custom per patient CT data",
    images: [
      "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&q=80",
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    ],
    featured: true,
    indications: [
      "Craniofacial bone defect reconstruction",
      "Post-traumatic cranial repair",
      "Tumor-related craniofacial defects",
    ],
    contraindications: [
      "Active or latent infection at the implant site",
      "Insufficient bone quality or vascular supply",
    ],
    keyFeatures: [
      "Custom-designed from patient CT data",
      "Bioactive silk fibroin promotes osteogenesis",
      "Fully bioresorbable \u2014 no secondary surgery",
      "Interconnected porous architecture for bone ingrowth",
      "Radiolucent for clear post-operative imaging",
    ],
    regulatoryStatus: "Investigational",
    catalogNumber: "PSI-CF-001",
  },
  {
    id: "psi-mandibular",
    name: "Mandibular Reconstruction PSI",
    slug: "mandibular-reconstruction-psi",
    collection: "patient-specific",
    price: 0,
    description: "Custom mandibular implant for segmental defect reconstruction",
    longDescription: "Designed for mandibular reconstruction following trauma, tumor resection, or congenital defects. Each implant is digitally designed using advanced CAD software to perfectly fit the patient\u2019s anatomy while incorporating optimal porosity for bone ingrowth. The Seribo\u2122 material provides bioactive scaffolding that guides new bone formation, with silk fibroin\u2019s RGD motifs enhancing osteoblast adhesion and proliferation.",
    materials: "Seribo\u2122 (Silk Fibroin Microfiber + Polycaprolactone Composite)",
    dimensions: "Custom per patient CT data",
    images: [
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
      "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&q=80",
    ],
    featured: true,
    new: true,
    indications: [
      "Mandibular segmental defect reconstruction",
      "Post-tumor resection mandibular repair",
      "Mandibular augmentation with autograft support",
    ],
    keyFeatures: [
      "Anatomically precise mandibular contour",
      "Reduces intraoperative modification time",
      "Supports autograft integration",
      "Bioresorbable with controlled degradation",
    ],
    regulatoryStatus: "Investigational",
    catalogNumber: "PSI-MR-001",
  },
  {
    id: "psi-orbital",
    name: "Orbital Floor PSI",
    slug: "orbital-floor-psi",
    collection: "patient-specific",
    price: 0,
    description: "Patient-specific orbital floor reconstruction implant",
    longDescription: "The Orbital Floor PSI addresses complex orbital fractures with a precisely contoured implant designed from the patient\u2019s CT data. The thin-profile design conforms to the orbital anatomy while the porous Seribo\u2122 architecture promotes bone regeneration. Radiolucent properties allow clear post-operative CT and X-ray monitoring of healing progress without artifact interference.",
    materials: "Seribo\u2122 (Silk Fibroin Microfiber + Polycaprolactone Composite)",
    dimensions: "Custom per patient CT data",
    images: [
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    ],
    new: true,
    indications: [
      "Orbital floor fracture reconstruction",
      "Orbital blowout fracture repair",
      "Post-traumatic orbital defects",
    ],
    keyFeatures: [
      "Thin-profile design for orbital anatomy",
      "Radiolucent for artifact-free imaging",
      "Precise anatomical contour from CT data",
      "Eliminates need for implant removal",
    ],
    regulatoryStatus: "Investigational",
    catalogNumber: "PSI-OF-001",
  },

  // Porous Bone Grafts
  {
    id: "graft-block-small",
    name: "Seribo Bone Graft Block (Small)",
    slug: "seribo-bone-graft-block-small",
    collection: "bone-grafts",
    price: 0,
    description: "Bioactive porous bone graft scaffold for small defect management",
    longDescription: "The Seribo\u2122 Small Bone Graft Block is a bioactive, osteoconductive scaffold designed to support bone regeneration in smaller defect sites. Its interconnected porous architecture facilitates cellular infiltration, vascularization, and natural bone remodelling, while providing a stable framework for autografts or bone substitutes. The innate bioactivity of silk fibroin enhances osteoblast attachment and proliferation.",
    materials: "Seribo\u2122 (Silk Fibroin Microfiber + Polycaprolactone Composite)",
    dimensions: "10mm \u00d7 10mm \u00d7 10mm",
    images: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
    ],
    indications: [
      "Small bone defect filling",
      "Dental bone augmentation",
      "Autograft carrier in localized defects",
    ],
    keyFeatures: [
      "Osteoconductive porous network",
      "Promotes vascularization and cell infiltration",
      "Gradually replaced by native bone",
      "Compatible with autograft and bone substitutes",
    ],
    regulatoryStatus: "Investigational",
    catalogNumber: "SBG-S-001",
  },
  {
    id: "graft-block-large",
    name: "Seribo Bone Graft Block (Large)",
    slug: "seribo-bone-graft-block-large",
    collection: "bone-grafts",
    price: 0,
    description: "Large bioactive scaffold for segmental bone defect reconstruction",
    longDescription: "The Seribo\u2122 Large Bone Graft Block addresses larger segmental bone defects in orthopedic and craniofacial surgery. Acts as a carrier for autografts, providing structural support in larger defects while the bioactive silk fibroin promotes osteogenesis. Can be used in combination with titanium plates and screws in load-bearing regions, where the graft supports bone regeneration and the fixation devices provide mechanical stability.",
    materials: "Seribo\u2122 (Silk Fibroin Microfiber + Polycaprolactone Composite)",
    dimensions: "20mm \u00d7 20mm \u00d7 20mm",
    images: [
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    ],
    featured: true,
    indications: [
      "Large segmental bone defects",
      "Tumor-related bone defects",
      "Mandibular reconstruction with autograft support",
      "Load-bearing reconstructions with rigid fixation",
    ],
    keyFeatures: [
      "Structural support for large defects",
      "Compatible with titanium fixation hardware",
      "Autograft carrier capability",
      "~1.5\u00d7 stronger than pure PCL",
    ],
    regulatoryStatus: "Investigational",
    catalogNumber: "SBG-L-001",
  },
  {
    id: "graft-wedge",
    name: "Seribo Wedge Graft",
    slug: "seribo-wedge-graft",
    collection: "bone-grafts",
    price: 0,
    description: "Wedge-shaped bone graft for angular defect correction",
    longDescription: "The Seribo\u2122 Wedge Graft is designed for angular defect correction and osteotomy support. Its tapered geometry provides targeted support where needed, while the porous Seribo\u2122 architecture promotes natural bone infiltration and remodelling. Suitable for a range of orthopedic applications requiring angular correction or gap filling.",
    materials: "Seribo\u2122 (Silk Fibroin Microfiber + Polycaprolactone Composite)",
    dimensions: "15mm \u00d7 15mm \u00d7 10mm (tapered)",
    images: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    ],
    new: true,
    indications: [
      "Angular defect correction",
      "Osteotomy gap filling",
      "Orthopedic bone augmentation",
    ],
    keyFeatures: [
      "Tapered geometry for angular defects",
      "Promotes natural bone remodelling",
      "Bioactive silk fibroin surface",
      "Bioresorbable \u2014 no removal needed",
    ],
    regulatoryStatus: "Investigational",
    catalogNumber: "SBG-W-001",
  },

  // Porous Bone Membranes
  {
    id: "membrane-dental-sm",
    name: "Seribo Dental Membrane (15\u00d720mm)",
    slug: "seribo-dental-membrane-small",
    collection: "bone-membranes",
    price: 0,
    description: "Bioactive membrane for guided bone regeneration in dental applications",
    longDescription: "The Seribo\u2122 Dental Membrane is designed for predictable bone regeneration in dental applications. Its adaptable structure allows quick and easy contouring during surgery. The dual-layer design features a smooth outer layer to prevent epithelial proliferation and porous inner layers that promote osteoblast attachment for guided bone regeneration. Fully resorbable within 6\u20139 months.",
    materials: "Seribo\u2122 (Silk Fibroin Microfiber + Polycaprolactone Composite)",
    dimensions: "15mm \u00d7 20mm",
    images: [
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    ],
    indications: [
      "Extraction socket preservation",
      "Localized ridge augmentation",
      "Guided bone regeneration in dehiscence defects",
      "GBR in periodontal defects",
    ],
    keyFeatures: [
      "Dual-layer design (smooth outer, porous inner)",
      "Easy intraoperative contouring",
      "Complete resorption in 6\u20139 months",
      "Preserves alveolar bone volume",
    ],
    regulatoryStatus: "Investigational",
    catalogNumber: "SBM-D-015",
  },
  {
    id: "membrane-dental-lg",
    name: "Seribo Dental Membrane (25\u00d730mm)",
    slug: "seribo-dental-membrane-large",
    collection: "bone-membranes",
    price: 0,
    description: "Large-format bioactive membrane for extended dental bone regeneration",
    longDescription: "The large-format Seribo\u2122 Dental Membrane provides broader coverage for more extensive dental bone regeneration procedures, including alveolar ridge reconstruction and multi-site guided bone regeneration. Supports natural healing with the same dual-layer architecture and bioactive properties as the standard size, with enhanced coverage for larger defect areas.",
    materials: "Seribo\u2122 (Silk Fibroin Microfiber + Polycaprolactone Composite)",
    dimensions: "25mm \u00d7 30mm",
    images: [
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
    ],
    indications: [
      "Alveolar ridge reconstruction",
      "Multi-site guided bone regeneration",
      "Extended socket preservation",
      "Ridge augmentation for implant readiness",
    ],
    keyFeatures: [
      "Extended coverage area",
      "Dual-layer GBR architecture",
      "Bioactive osteoblast promotion",
      "No secondary surgery for removal",
    ],
    regulatoryStatus: "Investigational",
    catalogNumber: "SBM-D-025",
  },
  {
    id: "membrane-craniofacial",
    name: "Seribo Craniofacial Membrane",
    slug: "seribo-craniofacial-membrane",
    collection: "bone-membranes",
    price: 0,
    description: "Bioactive membrane for craniofacial and orthopedic bone regeneration",
    longDescription: "The Seribo\u2122 Craniofacial Membrane is designed for comminuted fractures and craniofacial reconstruction. In fractures with multiple fragments, the membrane holds bone fragments together, maintaining spatial orientation and promoting coordinated healing. When used with rigid fixation devices such as titanium plates and screws, the membrane enhances osteogenic cellular activity while the metal constructs provide mechanical stability.",
    materials: "Seribo\u2122 (Silk Fibroin Microfiber + Polycaprolactone Composite)",
    dimensions: "40mm \u00d7 50mm",
    images: [
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    ],
    featured: true,
    indications: [
      "Comminuted fracture management",
      "Craniofacial reconstruction",
      "Load-bearing applications with rigid fixation",
      "Orthopedic bone regeneration",
    ],
    keyFeatures: [
      "Holds fracture fragments in spatial orientation",
      "Compatible with titanium fixation hardware",
      "Facilitates early cellular adhesion and differentiation",
      "Bioactive scaffold for accelerated regeneration",
    ],
    regulatoryStatus: "Investigational",
    catalogNumber: "SBM-CF-001",
  },

  // Bioresorbable Fixation System - CMF
  {
    id: "cmf-plate-straight",
    name: "Seribo CMF Plate (Straight)",
    slug: "seribo-cmf-plate-straight",
    collection: "fixation-cmf",
    price: 0,
    description: "Bioresorbable straight plate for craniomaxillofacial fixation",
    longDescription: "The Seribo\u2122 CMF Straight Plate provides bioresorbable fixation for the stabilization of fractures and reconstruction of the craniomaxillofacial skeleton. Features a beveled edge design that reduces palpability for improved patient comfort, partial countersinks for stable plate\u2013screw interfaces, and straight-edged construction that maintains plate thickness at boundaries for superior strength. Especially beneficial in pediatric cases where ongoing bone growth makes permanent metal implants unsuitable.",
    materials: "Seribo\u2122 (Silk Fibroin Microfiber + Polycaprolactone Composite)",
    dimensions: "4-hole, 6-hole, and 8-hole configurations",
    images: [
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
      "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&q=80",
    ],
    featured: true,
    indications: [
      "CMF fracture repair and reconstruction (pediatric & adult)",
      "Non-load-bearing fixation of bone fragments and grafts",
      "Craniomaxillofacial skeleton stabilization",
    ],
    contraindications: [
      "Areas with active or latent infection",
      "Sites with insufficient bone quality, quantity, or vascular supply",
    ],
    keyFeatures: [
      "Beveled edge reduces palpability",
      "Partial countersinks minimize micromotion",
      "Straight-edged design for superior strength",
      "Ideal for pediatric cases",
      "Fully bioresorbable \u2014 no removal surgery",
    ],
    regulatoryStatus: "Investigational",
    catalogNumber: "SFX-SP-001",
  },
  {
    id: "cmf-plate-l-shaped",
    name: "Seribo CMF Plate (L-Shaped)",
    slug: "seribo-cmf-plate-l-shaped",
    collection: "fixation-cmf",
    price: 0,
    description: "Bioresorbable L-shaped plate for angular CMF fixation",
    longDescription: "The L-Shaped CMF Plate extends the Seribo\u2122 fixation system to angular fracture configurations where straight plates cannot provide adequate stabilization. Same advanced plate design features \u2014 beveled edges, partial countersinks, and optimized thickness \u2014 in a geometry suited for mandibular angle, zygomatic buttress, and other angular fixation applications.",
    materials: "Seribo\u2122 (Silk Fibroin Microfiber + Polycaprolactone Composite)",
    dimensions: "4+4 hole L-configuration",
    images: [
      "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&q=80",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
    ],
    new: true,
    indications: [
      "Mandibular angle fracture fixation",
      "Zygomatic buttress stabilization",
      "Angular CMF fracture repair",
    ],
    keyFeatures: [
      "L-shaped geometry for angular fixation",
      "Same advanced plate design features",
      "Low-profile for patient comfort",
      "Bioresorbable with no removal needed",
    ],
    regulatoryStatus: "Investigational",
    catalogNumber: "SFX-LP-001",
  },
  {
    id: "orbital-plate",
    name: "Seribo Orbital Floor Plate",
    slug: "seribo-orbital-floor-plate",
    collection: "fixation-cmf",
    price: 0,
    description: "Contoured bioresorbable plate for orbital floor reconstruction",
    longDescription: "The Seribo\u2122 Orbital Floor Plate is specifically contoured for orbital floor reconstruction. Its thin, anatomically shaped profile provides support to the orbital contents while promoting bone regeneration through the bioactive Seribo\u2122 scaffold. Radiolucent properties allow post-operative imaging without artifact interference, enabling accurate monitoring of healing and regeneration.",
    materials: "Seribo\u2122 (Silk Fibroin Microfiber + Polycaprolactone Composite)",
    dimensions: "Anatomically contoured orbital profile",
    images: [
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
    ],
    indications: [
      "Orbital floor fracture repair",
      "Orbital blowout fracture reconstruction",
      "Post-traumatic orbital support",
    ],
    keyFeatures: [
      "Anatomically contoured for orbital floor",
      "Thin profile for delicate orbital anatomy",
      "Radiolucent for clear imaging",
      "Bioactive bone regeneration support",
    ],
    regulatoryStatus: "Investigational",
    catalogNumber: "SFX-OB-001",
  },
  {
    id: "neuro-plate",
    name: "Seribo Neuro Plate",
    slug: "seribo-neuro-plate",
    collection: "fixation-cmf",
    price: 0,
    description: "Ultra-low-profile bioresorbable plate for neurosurgical applications",
    longDescription: "The Seribo\u2122 Neuro Plate is designed for craniotomy fixation and neurosurgical bone flap stabilization. Its ultra-low-profile design minimizes tissue irritation while the bioresorbable nature eliminates the need for removal surgery. Particularly valuable in pediatric neurosurgery where skull growth must be accommodated.",
    materials: "Seribo\u2122 (Silk Fibroin Microfiber + Polycaprolactone Composite)",
    dimensions: "Ultra-low-profile neurosurgical configuration",
    images: [
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
    ],
    indications: [
      "Craniotomy bone flap fixation",
      "Pediatric neurosurgical applications",
      "Cranial reconstruction",
    ],
    keyFeatures: [
      "Ultra-low-profile design",
      "Accommodates pediatric skull growth",
      "Minimizes tissue irritation",
      "No MRI/CT artifact interference",
    ],
    regulatoryStatus: "Investigational",
    catalogNumber: "SFX-NP-001",
  },
  {
    id: "mesh-plate",
    name: "Seribo Mesh Plate",
    slug: "seribo-mesh-plate",
    collection: "fixation-cmf",
    price: 0,
    description: "Bioresorbable mesh plate for broad-area craniofacial reconstruction",
    longDescription: "The Seribo\u2122 Mesh Plate provides broad-area coverage for craniofacial defect reconstruction. The mesh architecture combines structural support with enhanced porosity, allowing tissue integration across the entire surface area. Can be trimmed intraoperatively to match specific defect geometries while maintaining structural integrity.",
    materials: "Seribo\u2122 (Silk Fibroin Microfiber + Polycaprolactone Composite)",
    dimensions: "Various mesh configurations available",
    images: [
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
    ],
    indications: [
      "Broad-area craniofacial reconstruction",
      "Cranial defect coverage",
      "Cranioplasty applications",
    ],
    keyFeatures: [
      "Broad-area coverage",
      "Trimmable intraoperatively",
      "Enhanced porosity mesh architecture",
      "Full tissue integration across surface",
    ],
    regulatoryStatus: "Investigational",
    catalogNumber: "SFX-MP-001",
  },
];

export const getProductsByCollection = (collectionSlug: string): Product[] => {
  return products.filter((product) => product.collection === collectionSlug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter((product) => product.new);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const getCollectionBySlug = (slug: string): Collection | undefined => {
  return collections.find((collection) => collection.slug === slug);
};

export const getRelatedProducts = (productId: string, limit = 4): Product[] => {
  const product = products.find((p) => p.id === productId);
  if (!product) return [];

  return products
    .filter((p) => p.collection === product.collection && p.id !== productId)
    .slice(0, limit);
};
