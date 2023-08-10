// ts 사용시 이미지파일 불러올 수 있도록 type 정의
declare module "*.jpg" {
    const content: any;
    export default content;
}

declare module "*.png" {
    const content: any;
    export default content;
}