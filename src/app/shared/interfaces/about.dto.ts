export interface AboutDto {
  title: string;
  text: string;
  stats: {
    icon: string;
    title: string;
    count: string;
  }[];
}
