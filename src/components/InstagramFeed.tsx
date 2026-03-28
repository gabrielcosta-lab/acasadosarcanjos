import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const InstagramFeed = () => {
  const sectionRef = useScrollAnimation();

  const instagramPosts = [
    { id: 1, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=500&fit=crop", likes: 234 },
    { id: 2, image: "https://images.unsplash.com/photo-1528892677828-8862216f3665?w=400&h=600&fit=crop", likes: 456 },
    { id: 3, image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=450&fit=crop", likes: 189 },
    { id: 4, image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&h=550&fit=crop", likes: 567 },
    { id: 5, image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=500&fit=crop", likes: 345 },
    { id: 6, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop", likes: 678 },
  ];

  // Split posts into two columns for masonry effect
  const column1 = instagramPosts.filter((_, i) => i % 2 === 0);
  const column2 = instagramPosts.filter((_, i) => i % 2 === 1);

  const PostCard = ({ post, className }: { post: typeof instagramPosts[0], className?: string}) => (
    <Card className={cn("overflow-hidden shadow-medium hover:shadow-strong transition-smooth group cursor-pointer", className)}>
      <div className="relative">
        <img
          src={post.image}
          alt="Post do Instagram"
          className="w-full h-auto object-cover transition-smooth group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-4">
          <div className="flex items-center gap-2 text-white">
            <Instagram className="h-5 w-5" />
            <span className="font-semibold">{post.likes} curtidas</span>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <section className="py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        <div 
          ref={sectionRef.ref}
          className={`grid lg:grid-cols-[1fr,1.2fr] gap-8 lg:gap-16 items-center max-w-7xl mx-auto transition-all duration-700 ${
            sectionRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="mb-4 text-foreground">Acompanhe as Vidas Transformadas de Perto</h2>
            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
              Veja no nosso Instagram o dia a dia dos nossos projetos, os sorrisos das crianças 
              e adolescentes, e o impacto real das doações na comunidade. Cada post é uma história 
              de transformação e esperança!
            </p>
            <p className="mb-8 text-base text-muted-foreground leading-relaxed">
              Compartilhamos momentos especiais, conquistas dos nossos alunos, eventos e muito mais. 
              Venha fazer parte dessa rede de solidariedade e acompanhar de perto cada vida transformada.
            </p>
            <Button
              asChild
              variant="default"
              size="lg"
              className="hover-scale w-full sm:w-auto"
            >
              <a
                href="https://instagram.com/acasadosarcanjos.cda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Seguir no Instagram
              </a>
            </Button>
          </div>

          {/* Instagram Feed - Desktop: Vertical Masonry, Mobile: Horizontal Scroll */}
          <div className="relative order-1 lg:order-2">
            {/* Desktop View - Vertical Masonry */}
            {/* <div className="hidden lg:block relative h-[800px] overflow-hidden rounded-2xl"> */}
            <div className="relative h-[800px] overflow-hidden rounded-2xl">
              <div className="absolute inset-0 flex gap-4 flex-col sm:flex-row">
                {/* Column 1 - Scrolls Up */}
                <div className="flex-1 flex flex-col gap-4 animate-scroll-up">
                  {[...column1, ...column1].map((post, index) => (
                    <div key={`col1-${index}`} className="flex-shrink-0">
                      <PostCard post={post} />
                    </div>
                  ))}
                </div>

                {/* Column 2 - Scrolls Down */}
                <div className="flex-1 flex flex-col gap-4 animate-scroll-down">
                  {[...column2, ...column2].map((post, index) => (
                    <div key={`col2-${index}`} className="flex-shrink-0">
                      <PostCard post={post} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Gradient Overlays */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background to-transparent pointer-events-none z-10" />
            </div>

            {/* Mobile View - Horizontal Scroll with all images in one row */}
            {/* <div className="lg:hidden">
              <div className="overflow-x-auto pb-4 scrollbar-hide flex">
                <div className="flex gap-4 flex-1">
                  {instagramPosts.map((post) => (
                    <div key={`mobile-${post.id}`} className="w-64 h-full flex-1">
                      <PostCard post={post} className="min-h-10" />
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
