import { Select, SelectItem } from '@nextui-org/react';
import { BsChevronDown } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';

interface CityProps {
  key: string;
  label: string;
}

const cities = [
  { key: '0', label: 'Azad Kashmir, Pakistan', },
  { key: '1', label: 'Balochistan, Pakistan' },
  { key: '2', label: 'Islamabad, Pakistan' },
  { key: '3', label: 'Khyber Pakhtunkhwa, Pakistan' },
  { key: '4', label: 'Punjab, Pakistan' },
  { key: '5', label: 'Sindh, Pakistan' },
];

export default function LocationSelect() {
  return (
    <Select
    size='lg'
    
    aria-label='select'
      selectorIcon={<BsChevronDown />}
      className="max-w-xs rounded border border-gray-300 p-1 text-xl font-bold"
      defaultSelectedKeys={['']}
      placeholder="Pakistan"
      startContent={<SlLocationPin />}
    >
      {cities.map((city: CityProps) => (
        <SelectItem key={city.key}>{city.label}</SelectItem>
      ))}
    </Select>
  );
}
