import { EmptyState } from "@/components/ui/EmptyState";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-20">
      <EmptyState
        title="Page not found"
        description="That AlliancePay page does not exist or has moved."
        actionLabel="Back to home"
        actionHref="/"
      />
    </Container>
  );
}
