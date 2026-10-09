import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface AccordionItemData {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  className?: string;
}

export function Accordion({ items, defaultOpenId, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || items[0]?.id || null);
  const prefersReducedMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn("divide-y divide-[#DAD8D2] border-t border-b border-[#DAD8D2]", className)}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const panelId = `accordion-panel-${item.id}`;
        const headerId = `accordion-header-${item.id}`;

        return (
          <div key={item.id} className="py-0 sm:py-2">
            <h3>
              <button
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="group flex w-full items-center justify-between py-2.5 sm:py-5 text-left transition-colors cursor-pointer"
              >
                <span className="font-heading text-[0.9375rem] sm:text-[1.25rem] font-medium leading-[1.3] text-[#1A1A18] group-hover:text-[#1F3D2F] transition-colors pr-2.5 sm:pr-6">
                  {item.title}
                </span>
                <span
                  className={cn(
                    "flex h-6 w-6 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full text-[#6B6A65] transition-transform duration-300",
                    isOpen && "rotate-45 text-[#1F3D2F]"
                  )}
                >
                  <Plus className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.5} />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1, height: "auto" }
                      : { opacity: 0, height: 0 }
                  }
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={
                    prefersReducedMotion
                      ? { opacity: 0, height: 0 }
                      : { opacity: 0, height: 0 }
                  }
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.38,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-3 sm:pb-6 pt-0 sm:pt-1 text-[0.8125rem] sm:text-[1.0625rem] leading-[1.45] sm:leading-[1.6] text-[#6B6A65] max-w-[62ch]">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
