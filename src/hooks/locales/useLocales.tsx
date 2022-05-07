import { store } from "app/store";
import { useTranslation, Trans } from "react-i18next";

import "moment/locale/ar";
import "moment/locale/fr";
import moment from "moment";

const langSelector = (state: any) =>
    state.auth?.entities?.payload?.user_setting?.language;
const dateFormatSelector = (state: any) =>
    state.auth?.entities?.payload?.user_setting?.date_format;

const getSetting = () => {
    return {
        lang: langSelector(store.getState()),
        date_format: dateFormatSelector(store.getState()),
    };
};

export function formatDate(value: any, fmt: any) {
    const { lang, date_format } = getSetting();

    moment.locale(lang || "en");
    return moment(value).format(fmt || date_format);
}

export const useLocales = () => {
    const { t, i18n } = useTranslation();

    return { formatDate, trans: t, Trans, i18n };
};
