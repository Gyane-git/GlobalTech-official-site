import MarketingPageHero from '../../components/MarketingPageHero';
import ProductsCatalog from '../../components/ProductsCatalog';

export const metadata = {
  title: 'Products | GlobalTech Solutions',
  description: 'Explore OMS accounting, payroll, hospital, CRM, POS, laboratory and cloud software products from GlobalTech Nepal.',
};

export default function ProductsPage() {
  return (
    <main className="bg-green-50 text-[#101b2d]">
      <MarketingPageHero eyebrow="Products" breadcrumb="Products" title="Organisation Management Software for every department." description="Proven software built and supported in Nepal — accounting, operations, healthcare and more, deployable in the cloud or on your premises." />
      <ProductsCatalog />
    </main>
  );
}
