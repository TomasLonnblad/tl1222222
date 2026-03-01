"use client"
import { BubbleBackgroundDemo } from '@/components/demo-components-backgrounds-bubble';

type BubbleBackgroundDemoProps = {
  interactive: boolean;
};

export default function BubbleBackgroundDemoPage({
  interactive,
}: BubbleBackgroundDemoProps) {
  return (
    <BubbleBackgroundDemo
      interactive={interactive}
      className="absolute inset-0 flex items-center justify-center rounded-xl"
    />
  );
};
