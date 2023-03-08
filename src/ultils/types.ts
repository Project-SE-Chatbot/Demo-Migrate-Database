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
  course_code: number;
  name: string;
  name_thai: string;
  link_description: string;
};

export type MajorParam = {
  course_code: string
  name: string
  term: string;
  day: string;
  time: string;
};

export type TeacherAndPlaceForMajorParam = {
  name_teacher: string;
  place: string;
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
  name: string
  picture: string;
  location: string;
  email: string;
  time: string;
  link: string
}

export type findPlace = {
  room: string
}

export type createTeacher = {
  name: string
}

export type keyType = {
  key_1: string;

  key_2: string;

  key_3: string;

  key_4: string;

  key_5: string;

  key_6: string;
}

export type findKeyType = {
  key: string;
}

export type majorElectiveType  = {
  course_code: string;
  name: string;
  link_description: string;
}

