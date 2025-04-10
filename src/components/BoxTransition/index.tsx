import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box, Label, LogoImg, Section, Wrapper } from './styles';
import logo from '../../assets/logo.svg'

gsap.registerPlugin(ScrollTrigger);

export const ScrollBoxes: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const boxesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current || boxesRef.current.length === 0) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 0.5,
          pin: true,
          start: 'top top',
          end: '+=150%',
        },
      });

      timeline
        .to(boxesRef.current, {
          force3D: true,
          duration: 1,
          xPercent: 100,
          ease: 'power1.inOut',
          stagger: { amount: 1 },
        })
        .to(boxesRef.current, {
          ease: 'power1.out',
          duration: 1,
          rotation: '45deg',
        }, 0)
        .to(boxesRef.current, {
          ease: 'power1.in',
          duration: 1,
          rotation: '0deg',
        }, 1);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Wrapper>
      <LogoImg src={logo} />
      <Section ref={sectionRef}>
        <Label className="down">down</Label>
        <Label className="up">Up</Label>
        {[...Array(100)].map((_, i) => (
          <Box
            key={i}
            ref={el => {
              if (el) boxesRef.current[i] = el;
            }}
          />
        ))}
      </Section>
    </Wrapper>
  );

};

