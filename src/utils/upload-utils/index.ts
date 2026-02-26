import { message } from 'antd';
import { type RcFile } from 'antd/es/upload';
import { startsWithAlphanumericRegex } from '@/constants';

export const fileType = (file: RcFile) => {
  const isPNG = file.type === 'image/png';
  const isJPG = file.type === 'image/jpg';
  const isJPEG = file.type === 'image/jpeg';
  const isPDF = file.type === 'application/pdf';
  const isXLS = file.type === 'application/vnd.ms-excel';
  const isXLSX = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  const isWord = file.type === 'application/msword';
  const isDOCX =
    file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  const isCSV = file.type === 'text/csv';
  const isPPT = file.type === 'application/vnd.ms-powerpoint';
  const isPPTX =
    file.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
  const isTXT = file.type === 'text/plain';
  const isGIF = file.type === 'image/gif';
  const isMP4 = file.type === 'video/mp4';
  const isSVG = file.type === 'image/svg+xml';
  const isWEBP = file.type === 'image/webp';
  if (isPNG) return 'png';
  if (isJPEG) return 'jpeg';
  if (isPDF) return 'pdf';
  if (isJPG) return 'jpg';
  if (isDOCX) return 'docx';
  if (isWord) return 'doc';
  if (isCSV) return 'csv';
  if (isPPT) return 'ppt';
  if (isPPTX) return 'pptx';
  if (isXLS) return 'xls';
  if (isXLSX) return 'xlsx';
  if (isTXT) return 'txt';
  if (isGIF) return 'gif';
  if (isMP4) return 'mp4';
  if (isSVG) return 'svg';
  if (isWEBP) return 'webp';
  return null;
};

export const hasFileNameAlphanumericStart = (fileName: string, showMessage = true) => {
  const isStartAlphanumeric = startsWithAlphanumericRegex.test(fileName);
  if (!isStartAlphanumeric) {
    if (showMessage) {
      message.error(`${fileName}'s name must begin with an alphanumeric character`);
    }
    return false;
  }
  return true;
};
