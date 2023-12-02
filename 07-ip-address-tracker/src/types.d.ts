type IpDetails = {
  ip: string;
  isp: string;
  location: {
    country: string;
    city: string;
    timezone: string;
    lat: number;
    lng: number;
  };
};

type MapProps = {
  latitude: number;
  longitude: number;
};

type SearchFormProps = {
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
};

type IPDetailsProps = {
  ip: string;
  city: string;
  country: string;
  timezone: string;
  isp: string;
};
