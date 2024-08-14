import { Request, Response } from 'express';

import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

import sendResponse from '../../utils/sendResponse';
import { SecondaryCategoryService } from './secondary.service';

const createSecondaryCategory = catchAsync(
  async (req: Request, res: Response) => {
    const result = await SecondaryCategoryService.createSecondaryCategory(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Secondary category created successfully',
      data: result,
    });
  },
);

const getAllSecondaryCategories = catchAsync(
  async (req: Request, res: Response) => {
    const result = await SecondaryCategoryService.getAllSecondaryCategories();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Secondary categories retrieved successfully',
      data: result,
    });
  },
);

const getSecondaryCategoryById = catchAsync(
  async (req: Request, res: Response) => {
    const result = await SecondaryCategoryService.getSecondaryCategoryById(
      req.params.id,
    );
    if (!result) {
      return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: 'Secondary category not found',
        data: null,
      });
    }
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Secondary category retrieved successfully',
      data: result,
    });
  },
);

const updateSecondaryCategory = catchAsync(
  async (req: Request, res: Response) => {
    const result = await SecondaryCategoryService.updateSecondaryCategory(
      req.params.id,
      req.body,
    );
    if (!result) {
      return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: 'Secondary category not found',
        data: null,
      });
    }
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Secondary category updated successfully',
      data: result,
    });
  },
);

const deleteSecondaryCategory = catchAsync(
  async (req: Request, res: Response) => {
    const result = await SecondaryCategoryService.deleteSecondaryCategory(
      req.params.id,
    );
    if (!result) {
      return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: 'Secondary category not found',
        data: null,
      });
    }
    sendResponse(res, {
      statusCode: httpStatus.NO_CONTENT,
      success: true,
      message: 'Secondary category deleted successfully',
      data: null,
    });
  },
);

export const SecondaryCategoryController = {
  createSecondaryCategory,
  getAllSecondaryCategories,
  getSecondaryCategoryById,
  updateSecondaryCategory,
  deleteSecondaryCategory,
};
