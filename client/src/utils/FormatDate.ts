import { formatDistanceToNow, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";

export const FormatDate = ( dateISO : string) => {
    const date = parseISO(dateISO);
    return formatDistanceToNow(date, { addSuffix: true, locale: enUS });
};

