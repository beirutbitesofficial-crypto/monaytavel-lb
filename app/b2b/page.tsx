import type {Metadata} from 'next';
import BranchSite from '../components/BranchSite';

export const metadata:Metadata={
  title:'B2B Travel & DMC Lebanon | Mona Travel',
  description:'Mona Travel provides B2B travel, corporate travel, business delegation logistics, hotel sourcing and destination management services across Lebanon.'
};

export default function B2BPage(){return <BranchSite mode="b2b"/>}
