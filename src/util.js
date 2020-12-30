import {format} from 'date-fns';

export const formatDate=(date=new Date())=>{
    return format(new Date(date), 'MM/dd/yyyy')
}