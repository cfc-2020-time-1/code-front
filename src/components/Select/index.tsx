import React, { SelectHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Select: React.FC<SelectProps> = ({ icon: Icon, children, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} />}
    {children}
    <select {...rest} >
      <option value="Produtor">Produtor</option>
      <option value="Beneficiaro">Beneficiaro</option>
      <option value="Fornecedor">Fornecedor</option>
      <option value="Distribuidor">Distribuidor</option>
    </select>
  </Container>
);

export default Select;