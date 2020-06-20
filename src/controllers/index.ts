import { Router, Request, Response } from 'express'
import { UrlsService } from '@services/index'

const controllers = Router();

controllers.post('/urls', async (req: Request, res: Response) => {
  const { url } = req.body;

  const shortcuted_url = await UrlsService.storeUrl(url);

  const status_code = shortcuted_url.status_code;

  return res.status(status_code).json({
    success: status_code == 200 ? true : false,
    data: shortcuted_url.data,
  });
});

controllers.get('/urls', async (req: Request, res: Response) => {
  const urls = await UrlsService.index();

  const status_code = urls.status_code

  return res.status(status_code).json({
    success: status_code == 200 ? true : false,
    data: urls.data,
  });
});

controllers.get('/:url', async (req: Request, res: Response) => {
  const { url } = req.params;

  const urls = await UrlsService.getUrl(url);

  const status_code = urls.status_code;

  if (status_code === 200)
    return res.redirect(urls.data);


  return res.status(status_code).json({
    success: false,
    data: urls.data,
  });
});

export default controllers;
