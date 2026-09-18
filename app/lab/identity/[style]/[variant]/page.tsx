import { notFound } from 'next/navigation';

import { IdentityLabView } from '@/components/identity/identity-lab-view';
import {
  getIdentityVisualFamily,
  getIdentityVisualVariant,
  identityVariants,
  identityVisualFamilies,
} from '@/experiments/identity-visual/registry';

export function generateStaticParams() {
  return identityVisualFamilies.flatMap((family) =>
    identityVariants.map((variant) => ({
      style: family.slug,
      variant: variant.id,
    }))
  );
}

export default async function IdentityVariantPage({
  params,
}: {
  params: Promise<{ style: string; variant: string }>;
}) {
  const { style, variant } = await params;
  const family = getIdentityVisualFamily(style);
  const visualVariant = getIdentityVisualVariant(variant);

  if (!family || !visualVariant) {
    notFound();
  }

  return <IdentityLabView family={family} variant={visualVariant} />;
}
