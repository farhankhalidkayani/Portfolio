import { useState } from 'react';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { closing, disciplines, projects } from '../data/content';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import PageHeader from '../components/layout/PageHeader';
import ProjectCard from '../components/sections/work/ProjectCard';
import CtaBand from '../components/ui/CtaBand';

export default function Work() {
  useDocumentTitle('Work');
  const [f, setF] = useState<string>('All');
  const list = f === 'All' ? projects : projects.filter((p) => p.discipline === f);
  const pill = (name: string) => (
    <button key={name} onClick={() => setF(name)} aria-pressed={f === name}
      className={`rounded-full border px-4 py-2 text-[13px] transition-colors duration-200 ${f === name ? 'border-ink bg-ink text-paper' : 'border-line text-muted hover:border-ink hover:text-ink'}`}>
      {name}
    </button>
  );
  return (
    <>
      <PageHeader label="Case Studies" title="Work Built to Be Used, Not Just Seen.">
        {['All', ...disciplines].map(pill)}
      </PageHeader>
      <section className="border-t border-line bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[84rem] px-6 md:px-10">
          <p className="mb-10 text-sm text-muted">{list.length} project{list.length === 1 ? '' : 's'}{f !== 'All' && ` in ${f}`}</p>
          <LayoutGroup>
            <div className="grid gap-x-8 gap-y-14 lg:grid-cols-2">
              <AnimatePresence mode="popLayout">{list.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} />)}</AnimatePresence>
            </div>
          </LayoutGroup>
          {list.length === 0 && <p className="text-muted">No projects in this discipline yet.</p>}
        </div>
      </section>
      <CtaBand {...closing.work} sand />
    </>
  );
}
