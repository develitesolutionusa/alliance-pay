import { Container } from "@/components/ui/Container";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";

export default function Loading() {
  return (
    <Container className="py-16">
      <LoadingSkeleton lines={6} className="max-w-2xl" />
    </Container>
  );
}
