// export type CreateUserParsm = {
//   username: string;
//   password: string;
// };

// export type UpdateUserParsm = {
//   username: string;
//   password: string;
// };

// export type CreateUserProfileParsm = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   job: string;
// };

// export type CreateUserPostParsm = {
//   title: string;
//   description: string;
// };

export type DegreeParam = {
  id_degree: number;
  time: string;
  Amount: string;
  link: string;
};

export type AdminParam = {
  id_admin: number;
  name: string;
  password: string;
};

export type FaqParam = {
  id_faq: number;
  question: string;
  answer: string;
  frequency: number;
  tag: string;
};

export type FeedbackParam = {
  id_feedback: number;
  question: string;
  answer: string;
  score: number;
  feedback: string;
};

export type ElectiveParam = {
  id_free_elective: number;
  name: string;
  review: string;
};

export type MajorParam = {
  id_major: number;
  name_teacher: string;
  term: string;
  place: string;
  day: string;
  time: string;
};

export type PlaceParam = {
  id_place: number;
  building: string;
  room: string;
  location: string;
};

export type PlanParam = {
  id_plan: number;
  link: string;
};

export type Q_And_AParam = {
  id_q_and_a: number;
  question: string;
  answer: string;
};

export type RegisterParam = {
  id_register: number;
  degree: number;
};

export type TeacherParam = {
  id_teacher: number;
  picture: string;
  location: string;
  address: string;
  time: string;
}
