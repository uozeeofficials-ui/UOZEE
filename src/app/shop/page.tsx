import { Suspense } from "react";
import { ShopView } from "@/components/shop/shop-view";

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="py-32 text-center text-sm text-muted">Loading collection...</div>}>
      <ShopView />
    </Suspense>
  );
}
