
import { Card, CardContent } from "@/components/ui/card";

export interface ShowcaseItemProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const ShowcaseItem = ({ title, description, image, alt }: ShowcaseItemProps) => {
  return (
    <Card className="data-card h-full">
      <CardContent className="p-0">
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={alt} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-foreground/70">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShowcaseItem;
