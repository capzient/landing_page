import fs from 'fs';
import path from 'path';

import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

const PrivacyPolicy = async ({ params }) => {
  const filePath = path.join(process.cwd(), 'src/app/(legal)/markdown', `${params.name}.md`);
  let content;
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.log(error);
    return notFound();
  }

  return (
    <main className="my-28 min-h-screen">
      <article className="prose dark:prose-invert prose-neutral mx-auto max-w-6xl px-10 md:p-0">
        <Markdown
          options={{
            forceBlock: true,
            overrides: {
              a: {
                component: Link,
              },
            },
          }}
        >
          {content}
        </Markdown>
      </article>
    </main>
  );
};

export default PrivacyPolicy;
