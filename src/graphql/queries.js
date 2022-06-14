/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($email: AWSEmail!) {
    getUser(email: $email) {
      id
      firstName
      lastName
      Role
      highestLevelOfEducation
      dateOfBirth
      email
      mobile
      gender
      experience
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $email: AWSEmail
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        firstName
        lastName
        Role
        highestLevelOfEducation
        dateOfBirth
        email
        mobile
        gender
        experience
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
