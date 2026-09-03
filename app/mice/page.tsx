import type {Metadata} from 'next';
import BranchSite from '../components/BranchSite';

export const metadata:Metadata={
  title:'MICE Lebanon | Mona Travel',
  description:'Mona Travel provides meetings, incentive travel, conferences, exhibitions, corporate events and MICE destination management services across Lebanon.'
};

export default function MicePage(){return <BranchSite mode="mice"/>}
