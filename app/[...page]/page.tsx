import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '../../components/builder';
import { Navigation } from './dummyNav';
import { Footer } from '@/components/footer/Footer';

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Page(props: {
  params: Promise<{
    page: string[];
  }>;
}) {
  const path = (await props?.params)?.page?.join('/') || '';
  const builderModelName = path === 'symbol' ? 'symbol' : 'page';

  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: '/' + path,
      },
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navigation />
      <div className="grow px-6">
        {/* Render the Builder page */}
        <RenderBuilderContent
          content={content}
          model={builderModelName}
        />
      </div>
      <Footer />
    </div>
  );
}
