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

import { ClientDto, CreateClientDto, UpdateClientDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Clients<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags clients
   * @name ClientsControllerCreate
   * @request POST:/clients
   */
  clientsControllerCreate = (data: CreateClientDto, params: RequestParams = {}) =>
    this.request<ClientDto, any>({
      path: `/clients`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags clients
   * @name ClientsControllerFindAll
   * @request GET:/clients
   */
  clientsControllerFindAll = (params: RequestParams = {}) =>
    this.request<ClientDto[], any>({
      path: `/clients`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags clients
   * @name ClientsControllerFindOne
   * @request GET:/clients/{id}
   */
  clientsControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<ClientDto, any>({
      path: `/clients/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags clients
   * @name ClientsControllerUpdate
   * @request PATCH:/clients/{id}
   */
  clientsControllerUpdate = (id: string, data: UpdateClientDto, params: RequestParams = {}) =>
    this.request<ClientDto, any>({
      path: `/clients/${id}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags clients
   * @name ClientsControllerRemove
   * @request DELETE:/clients/{id}
   */
  clientsControllerRemove = (id: string, params: RequestParams = {}) =>
    this.request<ClientDto, any>({
      path: `/clients/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
}
