'use client';

import { Button, DatePicker, Form, Input, notification, Select } from 'antd';
import MaskedInput from 'antd-mask-input';
import { useLocale, useTranslations } from 'next-intl';

import bgIntro from '@/assets/images/bg-intro.jpg';
import { useWindowWidth } from '@/hooks';
import { TypeReserveTypeFields } from '@/types/contentful';
import { postApplicationForm } from '@/utils/fetch';
import dayjs from 'dayjs';
import { ArrowDownToLine, ListIcon, Phone, User2, UsersRound } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface IIntroSectionProps {
  reserveTypes: TypeReserveTypeFields[];
}

export function IntroSection({ reserveTypes }: IIntroSectionProps) {
  const t = useTranslations('Sections.intro');
  const tForm = useTranslations('Form');
  const locale = useLocale();
  const windowWidth = useWindowWidth();
  const [api, contextHolder] = notification.useNotification();

  const [isShow, setIsShow] = useState(false);
  const [form] = Form.useForm();

  const onSubmit = async (data: any) => {
    const requiredFields = ['name', 'phone'];
    const phone = data.phone.replace(/\D/g, '') as string;

    if (requiredFields.some((field) => !data[field])) {
      api.error({
        message: tForm('required'),
        description: requiredFields
          .filter((field) => !data[field])
          .map((field) => t(`form.${field}`))
          .join(', '),
        placement: 'top',
      });
      return;
    }

    if (phone.length < 10) {
      api.error({
        message: tForm('required'),
        description: t('form.phone'),
        placement: 'top',
      });
      return;
    }

    const res = await postApplicationForm({
      ...data,
      phone,
      dateIn: data?.dates?.length ? dayjs(data.dates[0]).format('YYYY-MM-DD') : null,
      dateOut: data?.dates?.length ? dayjs(data.dates[1]).format('YYYY-MM-DD') : null,
    });

    if (res.isDraft) {
      api.success({
        message: tForm('successApplication'),
        placement: 'top',
      });
      form.resetFields();
    }
  };

  return (
    <>
      <Image
        src={bgIntro.src}
        alt="background"
        width="0"
        height="0"
        sizes="100vw"
        className="hidden"
        priority
      />
      {contextHolder}
      <section
        className="relative h-screen w-full before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-[#02345a52] before:z-10 min-h-[510px]"
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
                form={form}
                onFinish={onSubmit}
                className={`transition-all duration-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-flow-row gap-4 w-full justify-center items-center overflow-hidden h-full ${!isShow ? `${windowWidth < 640 ? '!h-[208px]' : windowWidth < 768 ? '!h-[152px]' : '!h-[40px]'}` : ''}`}
              >
                <Form.Item className="!mb-0 col-span-1" name="name">
                  <Input
                    prefix={<User2 size={22} strokeWidth={1} />}
                    placeholder={t('form.name')}
                    size="large"
                  />
                </Form.Item>
                <Form.Item className="!mb-0 col-span-1" name="phone">
                  <MaskedInput
                    mask="996 000 00 00"
                    prefix={<Phone size={22} strokeWidth={1} />}
                    placeholder={t('form.phone')}
                    size="large"
                    type="tel"
                  />
                </Form.Item>
                <Form.Item className="!mb-0 col-span-1 sm:col-span-2 md:col-span-1" name="note">
                  <Input
                    prefix={<ListIcon size={22} strokeWidth={1} />}
                    placeholder={t('form.notes')}
                    size="large"
                  />
                </Form.Item>
                <Form.Item className={`!mb-0 col-span-1 ${!isShow ? 'order-1' : ''}`} name="quests">
                  <Input
                    prefix={<UsersRound size={22} strokeWidth={1} />}
                    placeholder={t('form.quests')}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      const numberValue = parseInt(value, 10);
                      const finalValue = numberValue >= 0 ? numberValue : null;
                      form.setFieldValue('quests', finalValue);
                    }}
                    size="large"
                    type="number"
                  />
                </Form.Item>
                <Form.Item
                  className={`!mb-0 h-full col-span-1 sm:col-span-2 md:col-span-1 ${isShow ? 'order-1' : ''}`}
                >
                  <Button type="primary" size="large" htmlType="submit" className="w-full">
                    {t('form.reserve')}
                  </Button>
                </Form.Item>
                <Form.Item className="!mb-0 col-span-1" name="reserveType">
                  <Select
                    placeholder={t('form.reserveType')}
                    options={reserveTypes.map((reserveType) => ({
                      value: reserveType.id,
                      label: reserveType[`label_${locale}`],
                    }))}
                    size="large"
                  />
                </Form.Item>
                <Form.Item className="!mb-0 col-span-1 sm:col-span-2" name="dates">
                  <DatePicker.RangePicker
                    className="w-full"
                    placeholder={[t('form.dateIn'), t('form.dateOut')]}
                    size="large"
                  />
                </Form.Item>
              </Form>
              <div
                className="absolute -translate-x-1/2 left-1/2 top-full translate-y-4 cursor-pointer bg-blue-600 p-1 rounded"
                onClick={() => setIsShow(!isShow)}
              >
                <ArrowDownToLine
                  strokeWidth={1}
                  color="#fff"
                  className={`transition ${isShow ? 'rotate-180' : ''}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
