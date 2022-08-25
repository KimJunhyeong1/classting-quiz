export const handleColorType = (color: string | undefined) => {
  switch (color) {
    case 'correct':
      return 'color: white; background: #65cdca; border-color: #65cdca';
    case 'incorrect':
      return 'color: white; background: #fe7e64; border-color: #fe7e64';
    case 'pending':
      return 'color: #00c795; background: white; border-color: #00c795';
  }
};
