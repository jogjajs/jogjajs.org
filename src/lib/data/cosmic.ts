import { BUCKET_READ_KEY, BUCKET_SLUG } from '$env/static/private'
import { createBucketClient } from '@cosmicjs/sdk'

const cosmic = createBucketClient({
	bucketSlug: BUCKET_SLUG ?? '',
	readKey: BUCKET_READ_KEY ?? ''
})

export default cosmic
