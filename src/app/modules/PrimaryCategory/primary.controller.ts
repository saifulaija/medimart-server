import { Request, Response } from 'express';

import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { PrimaryCategoryService } from './primary.service';
import sendResponse from '../../utils/sendResponse';

const createPrimaryCategory = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PrimaryCategoryService.createPrimaryCategory(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Primary category created successfully',
      data: result,
    });
  },
);

const getAllPrimaryCategories = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PrimaryCategoryService.getAllPrimaryCategories();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Primary categories retrieved successfully',
      data: result,
    });
  },
);

const getPrimaryCategoryById = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PrimaryCategoryService.getPrimaryCategoryById(
      req.params.id,
    );
    if (!result) {
      return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: 'Primary category not found',
        data:null
      });
    }
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Primary category retrieved successfully',
      data: result,
    });
  },
);

const updatePrimaryCategory = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PrimaryCategoryService.updatePrimaryCategory(
      req.params.id,
      req.body,
    );
    if (!result) {
      return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: 'Primary category not found',
        data:null
      });
    }
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Primary category updated successfully',
      data: result,
    });
  },
);

const deletePrimaryCategory = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PrimaryCategoryService.deletePrimaryCategory(
      req.params.id,
    );
    if (!result) {
      return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: 'Primary category not found',
        data:null
      });
    }
    sendResponse(res, {
      statusCode: httpStatus.NO_CONTENT,
      success: true,
      message: 'Primary category deleted successfully',
      data:null
    });
  },
);

export const PrimaryCategoryController = {
  createPrimaryCategory,
  getAllPrimaryCategories,
  getPrimaryCategoryById,
  updatePrimaryCategory,
  deletePrimaryCategory,
};
