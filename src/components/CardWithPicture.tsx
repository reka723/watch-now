import { Card, CardContent, CardTitle } from './ui/card';
interface props {
  title: string;
  reversed?: boolean;
  img: string;
}
function CardWithPicture({ title, reversed, img }: props) {
  return (
    <Card className='h-fit lg:h-80 w-full lg:w-2/3 flex items-center'>
      <CardContent
        className={`p-6 flex flex-col gap-12 lg:flex-row ${reversed && 'flex-row-reverse'}`}
      >
        <div className='flex gap-12 items-center flex-col'>
          <CardTitle>{title}</CardTitle>
          Pariatur et cupidatat cillum et sit occaecat commodo tempor aute eu irure nulla ex. Nulla
          sunt esse Lorem esse. Eiusmod in sunt sit exercitation qui incididunt deserunt tempor sunt
          sint fugiat. Aliqua minim cillum nostrud deserunt eiusmod do do non duis ullamco nisi
          nulla magna. Duis mollit anim consequat reprehenderit nisi ullamco reprehenderit in do in
          deserunt.
        </div>
        <img
          className='object-cover overflow-hidden rounded-sm lg:max-h-[550px] lg:min-w-[350px]'
          src={img}
        />
      </CardContent>
    </Card>
  );
}
export default CardWithPicture;
