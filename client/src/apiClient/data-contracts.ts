/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateClientDto {
  name: string;

  /** @format date-time */
  dob: string;
}

export interface ClientDto {
  id: number;
  name: string;

  /** @format date-time */
  dob: string;
}

export interface UpdateClientDto {
  name?: string;

  /** @format date-time */
  dob?: string;
}
