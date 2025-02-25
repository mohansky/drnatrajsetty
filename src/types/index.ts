export interface Education {
  degree: string;
  institution: string;
  university: string;
  duration: string;
}

export interface Services {
  name: string;
  shortName: string;
  description: string;
  duration?: string;
  type: string;
  requiresHospitalization?: boolean;
  icon: string; 
  weight?: number;
  image: {
    src: string;
    width: number;
    height: number;
    format: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg" | "avif";
  };
}

export interface Award {
  name: string;
  organization: string;
  year?: string;
  event?: string;
  purpose?: string;
  description?: string;
}

export interface Research {
  title: string;
  type?: string;
  description?: string;
  status?: string;
}


export interface Item {
  id?: number;
  title?: string;
  description: string;
}
 