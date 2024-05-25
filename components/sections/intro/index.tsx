'use client';

import { Button, DatePicker, Form, Input, Select } from 'antd';
import { useTranslations } from 'next-intl';

import bgIntro from '@/assets/images/bg-intro.jpg';
import { List, ListIcon, Phone, User2, UsersRound } from 'lucide-react';
import { useState } from 'react';

export function IntroSection() {
  const [isShow, setIsShow] = useState(false);
  const t = useTranslations('Sections.intro');

  return (
    <section
      className="relative h-screen w-full before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-[#02345a52] before:z-10"
      style={{ backgroundImage: `url(${bgIntro.src})` }}
    >
      <div className="relative z-20 container h-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-6">
          <h2
            className="animate-ease-in-out animate-fade-up animate-once text-white font-black uppercase text-center [font-family:_var(--font3)] [font-size:_clamp(30px,5vw,85px)] from:translate-y-5 to:translate-y-0"
            dangerouslySetInnerHTML={{ __html: t.raw('title') }}
          />
          <div className="relative">
            <Form
              className={`transition-all duration-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-flow-row gap-4 w-full justify-center items-center overflow-hidden h-full ${!isShow ? '!h-[40px]' : ''}`}
            >
              <Input
                name="name"
                prefix={<User2 size={22} strokeWidth={1} />}
                placeholder={t('form.name')}
                size="large"
                className="col-span-1"
              />
              <Input
                name="phone"
                prefix={<Phone size={22} strokeWidth={1} />}
                placeholder={t('form.phone')}
                size="large"
                className="col-span-1"
                type="tel"
              />
              <Input
                name="notes"
                prefix={<ListIcon size={22} strokeWidth={1} />}
                placeholder={t('form.notes')}
                size="large"
                className="col-span-1 sm:col-span-2 md:col-span-1"
              />
              <Input
                name="quests"
                prefix={<UsersRound size={22} strokeWidth={1} />}
                placeholder={t('form.quests')}
                size="large"
                className={`col-span-1 ${!isShow ? 'order-1' : ''}`}
                type="number"
              />
              <Button
                type="primary"
                className={`h-full col-span-1 sm:col-span-2 md:col-span-1 ${isShow ? 'order-1' : ''}`}
                size="large"
                htmlType="button"
                onClick={() => setIsShow(!isShow)}
              >
                {t('form.reserve')}
              </Button>
              <Select
                placeholder={t('form.reserveType')}
                className={`col-span-1`}
                options={[
                  { value: 'room', label: 'Номера' },
                  { value: 'event', label: 'Мероприятие' },
                  { value: 'place', label: 'Место' },
                ]}
                size="large"
              />
              <DatePicker.RangePicker
                placeholder={[t('form.dateIn'), t('form.dateOut')]}
                className="col-span-1 sm:col-span-2"
                size="large"
              />
            </Form>
            <div
              className="absolute -translate-x-1/2 left-1/2 top-full translate-y-4 cursor-pointer bg-blue-600 p-1 rounded"
              onClick={() => setIsShow(!isShow)}
            >
              <List color="#fff" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
