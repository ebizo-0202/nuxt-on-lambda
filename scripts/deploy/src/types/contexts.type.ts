export interface FileContext {
  fileName: string;
  absolutePathname: string;
  s3Key: string;
  contentType: string;
}

export interface AssetsDirContext {
  pathname: string;
  options?: {
    prefix?: string;
  };
}

export interface S3ObjectContext {
  key: string;
  lastModified: Date;
}
