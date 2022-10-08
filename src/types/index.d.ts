export interface FileRecord {
  url: string
  title: string
}

export type ReactMinimalGalleryProps = {
  images: FileRecord[]
  containerClassName?: Tailwind
  mainImageClassName?: string
  paginationColor?: string
  hoverColor?: string
  width?: string | number
  thumbnailWidth?: string | number
}

declare namespace ReactMinimalGallery {
  declare const images: FileRecord[]

  declare const containerClassName: string | undefined

  declare const mainImageClassName: string | undefined

  declare const paginationColor: string | undefined

  declare const hoverColor: string | undefined

  declare const width: string | number | undefined

  declare const thumbnailWidth: string | number | undefined
}

declare module 'react-minimal-gallery' {
  type ReactMinimalGalleryProps = {
    images: FileRecord[]
    containerClassName?: string
    mainImageClassName?: string
    paginationColor?: string
    hoverColor?: string
    width?: string | number
    thumbnailWidth?: string | number
  }

  export type ReactMinimalGalleryProps = ReactMinimalGalleryProps
}