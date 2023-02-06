export type CreateUserParsm = {
  username: string;
  password: string;
};

export type UpdateUserParsm = {
  username: string;
  password: string;
};

export type CreateUserProfileParsm = {
  firstName: string;
  lastName: string;
  age: number;
  job: string;
};

export type CreateUserPostParsm = {
  title: string;
  description: string;
};

export type DegreeParam = {
  time: string;
  Amount: string;
  link: string;
};

export type AdminParam = {
  name: string;
  password: string;
};

export type FaqParam = {
  question: string;
  answer: string;
  frequency: number;
  tag: string;
};

export type FeedbackParam = {
  question: string;
  answer: string;
  score: number;
  feedback: string;
};

export type ElectiveParam = {
  name: string;
  review: string;
};

export type MajorParam = {
  course_code: string
  name: string
  name_teacher: string;
  term: string;
  place: string;
  day: string;
  time: string;
};

export type PlaceParam = {
  building: string;
  room: string;
  location: string;
};

export type PlanParam = {
  link: string;
};

export type Q_And_AParam = {
  question: string;
  answer: string;
};

export type RegisterParam = {
  degree: string;
};

export type TeacherParam = {
  picture: string;
  location: string;
  address: string;
  time: string;
}

export type findPlace = {
  room: string
}
