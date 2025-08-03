"use client";

import { ComponentType, lazy } from 'react';
import { type TableRowProps } from './TableRow';

export const TableRowLazy = lazy(async () => {
  const locale = navigator.language || '';
  const localePrefix = locale.split('-')[0];
  try {
    return await import(`./TableRow.${locale}.tsx`).then(module => {
      return { default: module['TableRow'] as ComponentType<TableRowProps> };
    });
  } catch (error) {
    console.warn(`Locale-specific TableRow component not found for ${locale}. Falling back to default.`, error);
    try {
      return await import(`./TableRow.${localePrefix}.tsx`).then(module => {
        return { default: module['TableRow'] as ComponentType<TableRowProps> };
      });
    } catch (fallbackError) {
      console.warn(`Locale-specific TableRow component not found for ${localePrefix}. Falling back to default.`, fallbackError);
    }
  }
  return import('./TableRow').then(module => {
    return { default: module['TableRow'] };
  });
});
