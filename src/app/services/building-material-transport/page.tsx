import { MinimalServicePage, serviceDescriptions } from '@/components/ui/RelatedServices';
const service = serviceDescriptions['building-material-transport'];
export const metadata = { title: `${service.title} | Charloxy Transport`, description: service.description };
export default function Page() { return <MinimalServicePage {...service} />; }
