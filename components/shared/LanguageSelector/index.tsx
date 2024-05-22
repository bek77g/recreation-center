'use client';

import { Select } from 'antd';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const LanguageSelector = () => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const [languages, setLanguages] = useState<{ value: string; label: string }[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState(locale);

  useEffect(() => {
    const languages = ['ru', 'ky', 'en'].map((lng) => ({
      value: lng,
      label: lng.toUpperCase(),
    }));
    setLanguages(languages);
  }, []);

  const handleLanguageChange = async (language: string) => {
    const splitPathName = pathname.split('/');
    splitPathName.shift();
    splitPathName.shift();
    const transformedPathName = splitPathName.join('/');

    await router.push(`/${language}/${transformedPathName}`, {
      scroll: false,
    });
    setSelectedLanguage(language);
  };

  if (!selectedLanguage) {
    return null;
  }

  return (
    <Select defaultValue={locale} onChange={handleLanguageChange}>
      {languages.map((language) => (
        <Select.Option key={language.value} value={language.value}>
          {language.label}
        </Select.Option>
      ))}
    </Select>
  );
};
